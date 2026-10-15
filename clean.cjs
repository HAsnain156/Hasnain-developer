const fs = require('fs');

const filesToClean = {
  'src/components/layout/Navbar.jsx': ['Sparkles'],
  'src/pages/Attendance.jsx': ['Clock', 'lateCount'],
  'src/pages/Classes.jsx': ['BookOpen', 'Users'],
  'src/pages/Dashboard.jsx': ['classes'],
  'src/pages/Exams.jsx': ['PlusCircle', 'CheckCircle', 'BookOpen', 'Modal', 'students', 'isScheduleModalOpen', 'setIsScheduleModalOpen'],
  'src/pages/Settings.jsx': ['SettingsIcon'],
  'src/pages/Students.jsx': ['Filter', 'GraduationCap', 'classes'],
  'src/pages/Teachers.jsx': ['GraduationCap', 'Phone', 'Mail']
};

for (const [file, imports] of Object.entries(filesToClean)) {
  let content = fs.readFileSync(file, 'utf8');
  for (const imp of imports) {
    const regex = new RegExp('\\b' + imp + '\\b\\s*,?\\s*', 'g');
    content = content.replace(regex, '');
  }
  content = content.replace(/,\\s*\\}/g, '}');
  content = content.replace(/import\\s*\\{\\s*\\}\\s*from\\s*['\"][^'\"]+['\"];?\\r?\\n?/g, '');
  
  fs.writeFileSync(file, content);
}
