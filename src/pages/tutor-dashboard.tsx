import React, { useState } from 'react';
import { Home, Users, Book, DollarSign, User, Menu, X, ChevronLeft, ChevronRight, Circle } from 'lucide-react';

/* ---------------- Sidebar ---------------- */
const Sidebar = ({ setPage, currentPage, isOpen, toggleSidebar }) => {
  const navItems = [
    { name: 'Students', icon: Users, page: 'students' },
    { name: 'Resources', icon: Book, page: 'resources' },
    { name: 'Earnings', icon: DollarSign, page: 'earnings' },
    { name: 'Profile', icon: User, page: 'profile' },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-50 border-r border-gray-200 w-64 p-4 transform transition-transform duration-300 z-40
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">T</div>
          <span className="text-xl font-semibold text-blue-800">TutorEdge</span>
        </div>
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-200">
          <X className="w-6 h-6 text-gray-700" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => {
              setPage(item.page);
              toggleSidebar();
            }}
            className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors duration-200 w-full text-left
              ${currentPage === item.page
                ? 'bg-blue-100 text-blue-700 font-semibold'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </button>
        ))}
      </nav>

      <div className="mt-auto p-4 text-sm text-gray-500">
        <p>AIDC</p>
      </div>
    </div>
  );
};

/* ---------------- Dashboard Components ---------------- */
const Overview = () => {
  const Card = ({ title, value }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 flex-1 min-w-40">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
    </div>
  );

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Overview</h2>
      <div className="flex flex-col sm:flex-row gap-4">
        <Card title="New Demo Requests" value="3" />
        <Card title="Scheduled Interviews" value="2" />
        <Card title="Upcoming Classes" value="5" />
      </div>
    </div>
  );
};

const RecentActivity = () => {
  const ActivityItem = ({ title, description, imageUrl }) => (
    <div className="flex items-start space-x-4 p-4 rounded-xl transition-colors duration-200">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
        <button className="mt-2 text-sm font-medium text-blue-600 hover:underline">
          View
        </button>
      </div>
      <div className="w-32 h-20 flex-shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg object-cover w-full h-full shadow-md"
        />
      </div>
    </div>
  );

  const activityData = [
    {
      title: 'New Demo Request',
      description: 'Subject: Math, Grade: 10th, Student: Alex Harper',
      imageUrl: 'https://placehold.co/128x80/e2e8f0/0f172a?text=Demo',
    },
    {
      title: 'Scheduled Interview',
      description: 'Date: July 20, 2024, Time: 2:00 PM, Student: Sophia Clark',
      imageUrl: 'https://placehold.co/128x80/e2e8f0/0f172a?text=Interview',
    },
    {
      title: 'Upcoming Classes',
      description: 'Subject: Physics, Grade: 12th, Student: Ethan Carter',
      imageUrl: 'https://placehold.co/128x80/e2e8f0/0f172a?text=Class',
    },
  ];

  return (
    <div className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Activity</h2>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        {activityData.map((item, index) => (
          <div key={index}>
            <ActivityItem {...item} />
            {index < activityData.length - 1 && (
              <hr className="mx-4 border-gray-200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const Dashboard = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
    <Overview />
    <RecentActivity />
  </div>
);

/* ---------------- Pages ---------------- */
const Students = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-900">Students</h1>
    <p className="mt-4 text-gray-600">List of enrolled students, requests, and progress tracking.</p>
  </div>
);

const Resources = () => (
  <div className="p-8">
    <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
    <p className="mt-4 text-gray-600">Upload and manage teaching resources.</p>
  </div>
);

const Earnings = () => {
  const withdrawals = [
    { date: 'July 15, 2024', amount: '$250', status: 'Completed' },
    { date: 'June 20, 2024', amount: '$500', status: 'Completed' },
    { date: 'May 25, 2024', amount: '$300', status: 'Completed' },
  ];

  const pendingEarnings = [
    { date: 'August 10, 2024', amount: '$150', status: 'Pending' },
    { date: 'July 20, 2024', amount: '$50', status: 'Pending' },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">Earnings</h1>
      <p className="mt-2 text-gray-600">View your earnings and manage withdrawals</p>
      
      {/* Header Image */}
      <div className="w-full mt-6 rounded-xl overflow-hidden shadow-sm border border-gray-200">
        <img
          src="https://placehold.co/1000x300/a2e3c4/000000?text=Earnings+Overview"
          alt="Earnings Overview"
          className="object-cover w-full"
        />
      </div>

      {/* Recent Withdrawals */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Withdrawals</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {withdrawals.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pending Earnings */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Pending Earnings</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pendingEarnings.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  const [selectedDates, setSelectedDates] = useState([]);

  const toggleDate = (day, month, year) => {
    const dateStr = `${month}-${day}-${year}`;
    setSelectedDates(prevDates =>
      prevDates.includes(dateStr)
        ? prevDates.filter(d => d !== dateStr)
        : [...prevDates, dateStr]
    );
  };

  const isSelected = (day, month, year) => {
    const dateStr = `${month}-${day}-${year}`;
    return selectedDates.includes(dateStr);
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  };

  const getStartDay = (year, month) => {
    return new Date(year, month - 1, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.
  };

  const renderCalendar = (month, year) => {
    const daysInMonth = getDaysInMonth(year, month);
    const startDay = getStartDay(year, month);
    const monthName = new Date(year, month - 1).toLocaleString('default', { month: 'long' });
    const days = [];
    
    // Add empty cells for the start of the month
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`empty-${month}-${i}`} className="h-8"></div>);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelectedDay = isSelected(day, month, year);
      days.push(
        <button
          key={`${month}-${year}-${day}`}
          onClick={() => toggleDate(day, month, year)}
          className={`h-8 w-8 rounded-full flex items-center justify-center transition-colors duration-200
            ${isSelectedDay ? 'bg-blue-600 text-white' : 'text-gray-900 hover:bg-gray-200'}`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <ChevronLeft className="h-5 w-5 text-gray-400" />
          <h3 className="text-lg font-semibold text-gray-800">{monthName} {year}</h3>
          <ChevronRight className="h-5 w-5 text-gray-400" />
        </div>
        <div className="grid grid-cols-7 text-center text-sm text-gray-500">
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, index) => (
            <div key={`${d}-${index}`} className="h-8 flex items-center justify-center font-medium">{d}</div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
      <p className="mt-2 text-gray-600">Manage your profile information</p>

      {/* Profile Header */}
      <div className="mt-6 flex items-center space-x-4">
        <img
          src="https://placehold.co/80x80/e0e0e0/000000?text=Profile"
          alt="Profile"
          className="rounded-full h-20 w-20 object-cover"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-900">Sophia Carter</h2>
          <p className="text-sm text-gray-600">Verified Tutor</p>
          <p className="text-sm text-gray-500">Joined 2021</p>
        </div>
      </div>

      {/* About Me */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">About Me</h2>
        <textarea
          className="w-full h-32 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Write a brief bio about yourself..."
        ></textarea>
      </div>

      {/* Subjects & Rates */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Subjects & Rates</h2>
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="e.g., Math, Physics, Chemistry"
        />
        <input
          type="text"
          className="w-full mt-4 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Hourly Rate"
        />
      </div>

      {/* Availability */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Availability</h2>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
          {renderCalendar(7, 2024)}
          {renderCalendar(8, 2024)}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex justify-end space-x-4">
        <button className="px-6 py-2 rounded-lg text-gray-700 font-medium hover:bg-gray-200 transition-colors duration-200">
          Cancel
        </button>
        <button className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors duration-200">
          Save Changes
        </button>
      </div>
    </div>
  );
};


/* ---------------- Main App ---------------- */
const App = () => {
  const [page, setPage] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  let content;
  switch (page) {
    case 'dashboard':
      content = <Dashboard />;
      break;
    case 'students':
      content = <Students />;
      break;
    case 'resources':
      content = <Resources />;
      break;
    case 'earnings':
      content = <Earnings />;
      break;
    case 'profile':
      content = <Profile />;
      break;
    default:
      content = <Dashboard />;
  }

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Topbar with Menu Button */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white shadow-sm flex items-center px-4 z-30">
        <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-100">
          <Menu className="w-6 h-6 text-gray-700" />
        </button>
        <h1 className="ml-4 text-xl font-semibold text-blue-800">TutorEdge</h1>
      </header>

      {/* Sidebar */}
      <Sidebar setPage={setPage} currentPage={page} isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <main className={`flex-1 overflow-y-auto pt-14 p-4 transition-all duration-300 ${isSidebarOpen ? 'lg:ml-64' : 'lg:ml-0'}`}>
        {content}
      </main>
    </div>
  );
};

export default App;
