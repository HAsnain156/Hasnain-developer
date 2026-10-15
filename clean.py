import os, re

files = {
  'src/components/layout/Navbar.jsx': ['Sparkles'],
  'src/pages/Attendance.jsx': ['Clock', 'lateCount'],
  'src/pages/Classes.jsx': ['BookOpen', 'Users'],
  'src/pages/Dashboard.jsx': ['classes'],
  'src/pages/Exams.jsx': ['PlusCircle', 'CheckCircle', 'BookOpen', 'Modal', 'students', 'isScheduleModalOpen', 'setIsScheduleModalOpen'],
  'src/pages/Settings.jsx': ['SettingsIcon'],
  'src/pages/Students.jsx': ['Filter', 'GraduationCap', 'classes'],
  'src/pages/Teachers.jsx': ['GraduationCap', 'Phone', 'Mail']
}

for file, imports in files.items():
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    for imp in imports:
        content = re.sub(rf'\b{imp}\b\s*,?\s*', '', content)
    
    content = re.sub(r',\s*\}', '}', content)
    content = re.sub(r'import\s*\{\s*\}\s*from\s*[\'\"].*?[\'\"];?\n?', '', content)
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
