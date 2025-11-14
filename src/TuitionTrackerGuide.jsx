import React, { useState, useEffect } from 'react';
import { CheckSquare, Square, Calendar, Users, BookOpen, LogOut, TrendingUp, BarChart3, UserPlus, Trash2, Edit } from 'lucide-react';

const INITIAL_STUDENTS_DATA = {
  jancy: [
    { id: 3, name: "DEVDATH V P", grade: 6, time: "4PM-6PM", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi"] },
    { id: 5, name: "DHIJIN", grade: 4, time: "4-6", subjects: ["Malayalam", "Maths", "English", "EVS"] },
    { id: 11, name: "MISHONA SAJI", grade: 7, time: "4-7", subjects: ["Malayalam", "Maths", "English", "SS", "BS", "Hindi", "IT"] },
    { id: 15, name: "FERNADUS", grade: 5, time: "4-7.30", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi", "IT", "GK"] },
    { id: 16, name: "NAVANEETH", grade: 7, time: "4-6.30", subjects: ["Malayalam", "Maths", "English", "SS", "BS", "Hindi", "IT"] },
    { id: 17, name: "HARINANDAN", grade: 7, time: "4-6.30", subjects: ["Malayalam", "Maths", "English", "SS", "BS", "Hindi", "IT"] },
    { id: 22, name: "SIDHARTH", grade: 7, time: "4-6", subjects: ["Malayalam", "Maths", "English", "SS", "BS"] },
    { id: 24, name: "ALSTIN", grade: 5, time: "4-7", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi"] },
    { id: 26, name: "NANDHU", grade: 7, time: "5-6.30", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi", "IT"] },
    { id: 31, name: "NIYA BIBIN", grade: 6, time: "4.30-6", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi"] },
    { id: 32, name: "SREELAKSHMI", grade: 7, time: "5-6.30", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi", "IT"] },
    { id: 42, name: "AMNA FAISAL", grade: 6, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi", "IT"] },
    { id: 44, name: "JUWEL ANN", grade: 7, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi", "IT"] }
  ],
  arya: [
    { id: 4, name: "DEVNAND", grade: 3, time: "4PM-6PM", subjects: ["Malayalam", "Maths", "English", "EVS"] },
    { id: 6, name: "ABHIDEV", grade: 4, time: "5-6.30", subjects: ["Malayalam", "Maths", "English", "EVS", "IT", "GK", "Hindi"] },
    { id: 9, name: "ARYAN", grade: 4, time: "5PM-7PM", subjects: ["Malayalam", "Maths", "English", "EVS", "IT", "GK", "Hindi"] },
    { id: 25, name: "PARVATHY", grade: 3, time: "4-6", subjects: ["Malayalam", "Maths", "English", "EVS"] },
    { id: 27, name: "NIVEDYA", grade: 3, time: "5-6.30", subjects: ["Malayalam", "Maths", "English", "BS", "SS", "Hindi", "IT"] },
    { id: 35, name: "EVANIA ALBIN", grade: 3, time: "4-6", subjects: ["Malayalam", "Maths", "English", "EVS", "IT", "GK"] },
    { id: 36, name: "EVAN ALBIN", grade: 1, time: "4-6", subjects: ["Malayalam", "Maths", "English", "EVS"] },
    { id: 37, name: "IVAN LEON", grade: "LKG", time: "4-6", subjects: ["Malayalam", "Maths", "English"] },
    { id: 47, name: "HAIZIN HAADI", grade: 1, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "EVS", "Hindi", "IT"] },
    { id: 49, name: "CHRIS JOSHEPH", grade: 1, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "EVS"] },
    { id: 53, name: "ANGEL BINU", grade: 4, time: "04.30-7.30", subjects: ["Malayalam", "Maths", "English", "EVS"] },
    { id: 54, name: "THEERTHA", grade: 4, time: "4.30-7.30", subjects: ["Maths", "EVS"] },
    { id: 55, name: "YADHU", grade: 7, time: "4.30-6.30", subjects: ["Maths", "Hindi"] },
    { id: 56, name: "JOHAN REJI", grade: "LKG", time: "4.30-6.00", subjects: ["Malayalam", "English", "Maths"] },
    { id: 57, name: "ABHINAVE SANOOP", grade: 4, time: "4.30-6.30", subjects: ["Malayalam", "English", "Maths", "EVS", "IT", "GK"] },
    { id: 58, name: "ABHINAVE RAJEEVE", grade: 2, time: "4.30-7.30", subjects: ["Malayalam", "English", "Maths", "GK", "EVS", "IT"] },
    { id: 59, name: "ABHIYA RAJEEV", grade: "UKG", time: "4.30-7.30", subjects: ["Malayalam", "English", "Maths", "GK", "EVS"] }
  ],
  jabeena: [
    { id: 7, name: "AADHIDEV", grade: 8, time: "5-6.30", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] },
    { id: 8, name: "TOM JOSE", grade: 10, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 10, name: "CEYONA SAJI", grade: 8, time: "4-7", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] },
    { id: 13, name: "NAYANA RAJESH", grade: 10, time: "4-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 14, name: "BIDHUNA", grade: 10, time: "4-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 29, name: "DHANANJAY", grade: 10, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 33, name: "NAVEENA", grade: 8, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] },
    { id: 34, name: "NASRIN FATHIMA", grade: 8, time: "5-7.30", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] },
    { id: 38, name: "ARJUN DINESH", grade: 10, time: "5-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 41, name: "ASWIN RENJITH", grade: 10, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 46, name: "ANGEL SHIJI", grade: 8, time: "4.30-7.00", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] },
    { id: 48, name: "EDWIN BINU", grade: 10, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 50, name: "JEFIN SAJI", grade: 10, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS1", "PHYS", "CHEM", "BIO", "Hindi", "SS2"] },
    { id: 51, name: "MATHEW GILSON", grade: 8, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] },
    { id: 52, name: "JAGANADHAN", grade: 9, time: "4.30-7.30", subjects: ["Malayalam", "Maths", "English", "SS", "PHYS", "CHEM", "BIO", "Hindi"] }
  ]
};

const PASSWORDS = {
  jancy: 'J404',
  arya: 'Y234',
  jabeena: 'J123'
};

const TuitionTrackerApp = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('login');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [weeklyData, setWeeklyData] = useState({});
  const [studentsData, setStudentsData] = useState(INITIAL_STUDENTS_DATA);
  const [showWeeklyReport, setShowWeeklyReport] = useState(false);
  const [showStudentManagement, setShowStudentManagement] = useState(false);
  const [reportStartDate, setReportStartDate] = useState(() => {
    const date = new Date();
    date.setDate(date.getDate() - 7);
    return date.toISOString().split('T')[0];
  });
  const [reportEndDate, setReportEndDate] = useState(new Date().toISOString().split('T')[0]);
  const [passwordInput, setPasswordInput] = useState('');
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [newStudent, setNewStudent] = useState({
    name: '',
    grade: '',
    time: '',
    subjects: '',
    faculty: 'jancy'
  });

  const handleLogin = (faculty) => {
    setSelectedFaculty(faculty);
  };

  const verifyPassword = () => {
    if (passwordInput === PASSWORDS[selectedFaculty]) {
      setCurrentUser(selectedFaculty);
      setCurrentView('dashboard');
      setPasswordInput('');
    } else {
      alert('Incorrect password!');
      setPasswordInput('');
    }
  };

  const getCurrentStudents = () => {
    if (!currentUser) return [];
    return studentsData[currentUser] || [];
  };

  const getAllSubjects = () => {
    const students = getCurrentStudents();
    const subjectsSet = new Set();
    students.forEach(student => {
      student.subjects.forEach(subject => subjectsSet.add(subject));
    });
    return Array.from(subjectsSet).sort();
  };

  const toggleCell = (studentId, subject) => {
    const key = `${selectedDate}-${studentId}-${subject}`;
    setWeeklyData(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const studentHasSubject = (student, subject) => student.subjects.includes(subject);

  const isCellChecked = (studentId, subject) => {
    const key = `${selectedDate}-${studentId}-${subject}`;
    return weeklyData[key] || false;
  };

  const toggleColumn = (subject) => {
    const students = getCurrentStudents();
    const eligibleStudents = students.filter(s => studentHasSubject(s, subject));
    const allChecked = eligibleStudents.every(s => isCellChecked(s.id, subject));
    
    const newData = { ...weeklyData };
    eligibleStudents.forEach(student => {
      const key = `${selectedDate}-${student.id}-${subject}`;
      newData[key] = !allChecked;
    });
    setWeeklyData(newData);
  };

  const getDateRangeDates = (startDate, endDate) => {
    const dates = [];
    const current = new Date(startDate);
    const end = new Date(endDate);
    
    while (current <= end) {
      dates.push(new Date(current).toISOString().split('T')[0]);
      current.setDate(current.getDate() + 1);
    }
    return dates;
  };

  const getWeeklyCoverage = (student, startDate, endDate) => {
    const dates = getDateRangeDates(startDate, endDate);
    const subjectsCovered = new Set();
    
    dates.forEach(date => {
      student.subjects.forEach(subject => {
        const key = `${date}-${student.id}-${subject}`;
        if (weeklyData[key]) subjectsCovered.add(subject);
      });
    });
    
    return {
      covered: subjectsCovered.size,
      total: student.subjects.length,
      percentage: Math.round((subjectsCovered.size / student.subjects.length) * 100),
      missing: student.subjects.filter(s => !subjectsCovered.has(s))
    };
  };

  const getSuggestedSubjects = () => {
    const students = getCurrentStudents();
    const subjectPriority = {};
    
    students.forEach(student => {
      const dates = getDateRangeDates(reportStartDate, selectedDate);
      const coveredSubjects = new Set();
      
      dates.slice(0, -1).forEach(date => {
        student.subjects.forEach(subject => {
          const key = `${date}-${student.id}-${subject}`;
          if (weeklyData[key]) coveredSubjects.add(subject);
        });
      });
      
      student.subjects.forEach((subject, index) => {
        if (!coveredSubjects.has(subject)) {
          if (!subjectPriority[subject]) subjectPriority[subject] = 0;
          subjectPriority[subject] += 10;
        }
      });
    });
    
    return Object.entries(subjectPriority)
      .sort((a, b) => b[1] - a[1])
      .map(([subject]) => subject)
      .slice(0, 5);
  };

  const addStudent = () => {
    if (!newStudent.name || !newStudent.grade || !newStudent.time || !newStudent.subjects) {
      alert('Please fill all fields!');
      return;
    }

    const subjectsArray = newStudent.subjects.split(',').map(s => s.trim());
    const student = {
      id: Date.now(),
      name: newStudent.name.toUpperCase(),
      grade: newStudent.grade,
      time: newStudent.time,
      subjects: subjectsArray
    };

    setStudentsData(prev => ({
      ...prev,
      [newStudent.faculty]: [...prev[newStudent.faculty], student]
    }));

    setNewStudent({ name: '', grade: '', time: '', subjects: '', faculty: 'jancy' });
    alert('Student added successfully!');
  };

  const removeStudent = (faculty, studentId) => {
    if (confirm('Are you sure you want to remove this student?')) {
      setStudentsData(prev => ({
        ...prev,
        [faculty]: prev[faculty].filter(s => s.id !== studentId)
      }));
    }
  };

  // Login Screen
  if (currentView === 'login') {
    if (!selectedFaculty) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
            <div className="text-center mb-8">
              <BookOpen className="w-16 h-16 mx-auto text-purple-600 mb-4" />
              <h1 className="text-3xl font-bold text-gray-800">Tuition Centre Tracker</h1>
              <p className="text-gray-600 mt-2">Select your faculty</p>
            </div>
            <div className="space-y-4">
              <button onClick={() => handleLogin('jancy')} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition">
                Jancy (Head Faculty)
              </button>
              <button onClick={() => handleLogin('arya')} className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-lg transition">
                Arya
              </button>
              <button onClick={() => handleLogin('jabeena')} className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-4 rounded-lg transition">
                Jabeena
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 capitalize">{selectedFaculty}</h2>
            <p className="text-gray-600 mt-2">Enter your password</p>
          </div>
          <div className="space-y-4">
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && verifyPassword()}
              placeholder="Enter password"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:outline-none text-center text-lg"
              autoFocus
            />
            <button
              onClick={verifyPassword}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </button>
            <button
              onClick={() => { setSelectedFaculty(null); setPasswordInput(''); }}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }

  const students = getCurrentStudents();
  const allSubjects = getAllSubjects();
  const suggestedSubjects = getSuggestedSubjects();
  
  const facultyColors = {
    jancy: { bg: 'bg-blue-600', light: 'bg-blue-100' },
    arya: { bg: 'bg-green-600', light: 'bg-green-100' },
    jabeena: { bg: 'bg-gray-600', light: 'bg-gray-100' }
  };
  const colors = facultyColors[currentUser];

  // Student Management View (Jancy only)
  if (showStudentManagement && currentUser === 'jancy') {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className={`${colors.bg} text-white p-4`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Student Management</h1>
            <button onClick={() => setShowStudentManagement(false)} className="bg-white bg-opacity-20 px-4 py-2 rounded">
              Back to Dashboard
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4">
          {/* Add Student Form */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <UserPlus className="w-6 h-6" />
              Add New Student
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Student Name"
                value={newStudent.name}
                onChange={(e) => setNewStudent({...newStudent, name: e.target.value})}
                className="border rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Grade (e.g., 5, LKG)"
                value={newStudent.grade}
                onChange={(e) => setNewStudent({...newStudent, grade: e.target.value})}
                className="border rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Time (e.g., 4-6 PM)"
                value={newStudent.time}
                onChange={(e) => setNewStudent({...newStudent, time: e.target.value})}
                className="border rounded px-4 py-2"
              />
              <input
                type="text"
                placeholder="Subjects (comma separated)"
                value={newStudent.subjects}
                onChange={(e) => setNewStudent({...newStudent, subjects: e.target.value})}
                className="border rounded px-4 py-2"
              />
              <select
                value={newStudent.faculty}
                onChange={(e) => setNewStudent({...newStudent, faculty: e.target.value})}
                className="border rounded px-4 py-2"
              >
                <option value="jancy">Assign to Jancy</option>
                <option value="arya">Assign to Arya</option>
                <option value="jabeena">Assign to Jabeena</option>
              </select>
              <button
                onClick={addStudent}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 font-semibold"
              >
                Add Student
              </button>
            </div>
          </div>

          {/* Student Lists */}
          {Object.keys(studentsData).map(faculty => (
            <div key={faculty} className="bg-white rounded-lg shadow p-6 mb-4">
              <h3 className="text-lg font-bold mb-4 capitalize flex items-center gap-2">
                <span className={`px-3 py-1 rounded ${
                  faculty === 'jancy' ? 'bg-blue-100 text-blue-800' :
                  faculty === 'arya' ? 'bg-green-100 text-green-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {faculty}
                </span>
                <span className="text-gray-600">({studentsData[faculty].length} students)</span>
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 border text-left">Name</th>
                      <th className="p-2 border">Grade</th>
                      <th className="p-2 border">Time</th>
                      <th className="p-2 border text-left">Subjects</th>
                      <th className="p-2 border">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {studentsData[faculty].map(student => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="p-2 border font-semibold">{student.name}</td>
                        <td className="p-2 border text-center">{student.grade}</td>
                        <td className="p-2 border text-center">{student.time}</td>
                        <td className="p-2 border text-xs">{student.subjects.join(', ')}</td>
                        <td className="p-2 border text-center">
                          <button
                            onClick={() => removeStudent(faculty, student.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Weekly Report View
  if (showWeeklyReport) {
    const reportStudents = currentUser === 'jancy' 
      ? [
          ...studentsData.jancy.map(s => ({ ...s, faculty: 'Jancy' })),
          ...studentsData.arya.map(s => ({ ...s, faculty: 'Arya' })),
          ...studentsData.jabeena.map(s => ({ ...s, faculty: 'Jabeena' }))
        ]
      : studentsData[currentUser].map(s => ({ ...s, faculty: currentUser }));

    return (
      <div className="min-h-screen bg-gray-50">
        <div className={`${colors.bg} text-white p-4`}>
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-xl font-bold">
                {currentUser === 'jancy' ? 'All Faculties Report' : 'My Weekly Report'}
              </h1>
              <p className="text-sm opacity-90">{reportStudents.length} Students</p>
            </div>
            <button onClick={() => setShowWeeklyReport(false)} className="bg-white bg-opacity-20 px-4 py-2 rounded">
              Back
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto p-4">
          {/* Date Range Selector */}
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <h3 className="font-bold mb-3">Select Report Period</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Start Date</label>
                <input
                  type="date"
                  value={reportStartDate}
                  onChange={(e) => setReportStartDate(e.target.value)}
                  className="border rounded px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-1">End Date</label>
                <input
                  type="date"
                  value={reportEndDate}
                  onChange={(e) => setReportEndDate(e.target.value)}
                  className="border rounded px-4 py-2"
                />
              </div>
              <div className="text-sm text-gray-600 mt-6">
                Total Days: {getDateRangeDates(reportStartDate, reportEndDate).length}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-bold mb-4">Coverage Report</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    {currentUser === 'jancy' && <th className="p-2 border">Faculty</th>}
                    <th className="p-2 border text-left">Student</th>
                    <th className="p-2 border">Grade</th>
                    <th className="p-2 border">Total Subjects</th>
                    <th className="p-2 border">Covered</th>
                    <th className="p-2 border">Coverage %</th>
                    <th className="p-2 border text-left">Missing Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  {reportStudents.map(student => {
                    const coverage = getWeeklyCoverage(student, reportStartDate, reportEndDate);
                    return (
                      <tr key={`${student.faculty}-${student.id}`} className="hover:bg-gray-50">
                        {currentUser === 'jancy' && (
                          <td className="p-2 border">
                            <span className={`px-2 py-1 rounded text-xs font-semibold ${
                              student.faculty === 'Jancy' ? 'bg-blue-100 text-blue-800' :
                              student.faculty === 'Arya' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {student.faculty}
                            </span>
                          </td>
                        )}
                        <td className="p-2 border font-semibold">{student.name}</td>
                        <td className="p-2 border text-center">{student.grade}</td>
                        <td className="p-2 border text-center">{coverage.total}</td>
                        <td className="p-2 border text-center">{coverage.covered}</td>
                        <td className="p-2 border text-center">
                          <span className={`px-3 py-1 rounded-full font-bold ${
                            coverage.percentage === 100 ? 'bg-green-100 text-green-800' :
                            coverage.percentage >= 50 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {coverage.percentage}%
                          </span>
                        </td>
                        <td className="p-2 border text-xs text-red-600">
                          {coverage.missing.length > 0 ? coverage.missing.join(', ') : '✓ All covered'}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Main Dashboard
  return (
    <div className="min-h-screen bg-gray-50">
      <div className={`${colors.bg} text-white p-4`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold capitalize">{currentUser} Dashboard</h1>
            <p className="text-sm opacity-90">{students.length} Students</p>
          </div>
          <div className="flex gap-2">
            <button onClick={() => setShowWeeklyReport(true)} className="bg-white bg-opacity-20 px-4 py-2 rounded flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Report
            </button>
            {currentUser === 'jancy' && (
              <button onClick={() => setShowStudentManagement(true)} className="bg-white bg-opacity-20 px-4 py-2 rounded flex items-center gap-2">
                <UserPlus className="w-4 h-4" />
                Manage
              </button>
            )}
            <button onClick={() => { setCurrentView('login'); setCurrentUser(null); setSelectedFaculty(null); }} className="bg-white bg-opacity-20 px-4 py-2 rounded">
              <LogOut className="w-4 h-4 inline" />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b p-4">
        <div className="max-w-7xl mx-auto flex gap-3">
          <Calendar className="w-5 h-5" />
          <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="border rounded px-4 py-2" />
        </div>
      </div>

      {suggestedSubjects.length > 0 && (
        <div className="max-w-7xl mx-auto p-4">
          <div className="bg-yellow-50 border-2 border-yellow-300 rounded p-4">
            <div className="flex gap-3">
              <TrendingUp className="w-6 h-6 text-yellow-600" />
              <div>
                <h3 className="font-bold text-yellow-900 mb-2">Priority Subjects Today</h3>
                <div className="flex flex-wrap gap-2">
                  {suggestedSubjects.map(subject => (
                    <span key={subject} className="bg-yellow-200 px-3 py-1 rounded-full text-sm font-semibold">{subject}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-full mx-auto p-4 overflow-x-auto">
        <div className="bg-white rounded-lg shadow">
          <table className="w-full text-sm">
            <thead>
              <tr className={colors.light}>
                <th className="p-3 border sticky left-0 bg-inherit">Student</th>
                <th className="p-3 border">Grade</th>
                <th className="p-3 border">Time</th>
                {allSubjects.map(subject => (
                  <th key={subject} className="p-3 border">
                    <button onClick={() => toggleColumn(subject)} className="font-semibold hover:bg-gray-100 px-2 py-1 rounded">
                      {subject}
                    </button>
                  </th>
                ))}
                <th className="p-3 border">Coverage</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => {
                const todayCovered = student.subjects.filter(s => isCellChecked(student.id, s)).length;
                const todayCoverage = Math.round((todayCovered / student.subjects.length) * 100);

                return (
                  <tr key={student.id} className="hover:bg-gray-50">
                    <td className="p-3 border font-semibold sticky left-0 bg-white">{student.name}</td>
                    <td className="p-3 border text-center">{student.grade}</td>
                    <td className="p-3 border text-sm">{student.time}</td>
                    {allSubjects.map(subject => {
                      const hasSubject = studentHasSubject(student, subject);
                      const isChecked = isCellChecked(student.id, subject);

                      if (!hasSubject) {
                        return (
                          <td key={subject} className="p-3 border bg-gray-50 text-center">
                            <span className="text-gray-300">—</span>
                          </td>
                        );
                      }

                      return (
                        <td 
                          key={subject} 
                          className={`p-3 border cursor-pointer text-center ${isChecked ? 'bg-green-100' : 'hover:bg-blue-50'}`}
                          onClick={() => toggleCell(student.id, subject)}
                        >
                          {isChecked ? (
                            <CheckSquare className="w-6 h-6 text-green-600 mx-auto" />
                          ) : (
                            <Square className="w-6 h-6 text-gray-400 mx-auto" />
                          )}
                        </td>
                      );
                    })}
                    <td className="p-3 border text-center">
                      <span className={`px-3 py-1 rounded-full font-bold text-sm ${
                        todayCoverage === 100 ? 'bg-green-100 text-green-800' :
                        todayCoverage >= 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {todayCoverage}%
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-blue-50 rounded-lg p-4">
          <h3 className="font-bold mb-2">How to Use:</h3>
          <ul className="text-sm space-y-1">
            <li>✅ Click checkbox to mark subject as taught</li>
            <li>🔄 Click subject name to check all students</li>
            <li>📊 View reports with custom date ranges</li>
            <li>🔐 Passwords: Jancy (J404), Arya (Y234), Jabeena (J123)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TuitionTrackerApp;