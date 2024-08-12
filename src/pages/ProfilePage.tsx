import { useAuthContext } from "@/contexts/AuthContext";
import { FiMail, FiFileText, FiMapPin } from "react-icons/fi";
import { MdPerson } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";

function ProfilePage() {
  const { user } = useAuthContext();

  return (
    <div className="max-w-3xl mx-auto my-8 p-8 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700">
      <h1 className="text-4xl font-extrabold text-gray-800 dark:text-gray-100 mb-8 flex items-center gap-4">
        <MdPerson className="text-pink-500 dark:text-indigo-400" />
        {user.firstName} {user.lastName}'s Profile
      </h1>
      <div className="grid gap-6">
        <div className="flex items-center">
          <FiMail className="text-pink-500 dark:text-indigo-400" />
          <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
            Email:
          </span>
          <span className="ml-2 text-gray-800 dark:text-gray-200">
            {user.email}
          </span>
        </div>
        <div className="flex items-center">
          <FiFileText className="text-pink-500 dark:text-indigo-400" />
          <span className="ml-2 text-gray-600 dark:text-gray-400 font-medium">
            Resume Link:
          </span>
          {user.resume_link ? (
            <a
              href={user.resume_link}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-600 dark:text-blue-400 underline"
            >
              View Resume
            </a>
          ) : (
            <span className="ml-2 text-gray-800 dark:text-gray-200">
              No resume uploaded
            </span>
          )}
        </div>
        <div className="grid gap-2">
          <span className="flex items-center text-gray-600 dark:text-gray-400 font-medium">
            <MdOutlineWork className="mr-2 text-pink-500 dark:text-indigo-400" />
            Jobs Applied:
          </span>
          <ul className="list-disc list-inside text-gray-800 dark:text-gray-200">
            {user.jobs && user.jobs.length > 0 ? (
              user.jobs.map((job, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{job.title}</span>
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 underline"
                  >
                    {job.company}
                  </a>
                </li>
              ))
            ) : (
              <li className="text-gray-600 dark:text-gray-400">
                No jobs applied yet
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;