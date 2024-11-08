function AuthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-teal-300 via-blue-300 to-purple-400 p-4 dark:bg-gradient-to-r dark:from-indigo-900 dark:via-indigo-800 dark:to-blue-900">
      <div className="w-full max-w-md rounded-xl bg-[#FAF9F6] p-4 dark:bg-gray-900 md:max-w-lg lg:min-w-[500px]">
        <div className="px-2 md:px-5">{children}</div>
      </div>
    </div>
  );
}

export default AuthWrapper;
