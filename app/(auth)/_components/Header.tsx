interface HeaderProps {
  label: string;
  secondLabel?: string;
}

function Header({ label, secondLabel }: HeaderProps) {
  return (
    <div className="mt-4 flex w-full flex-col items-start justify-center gap-2">
      <h2 className="text-2xl font-semibold text-black dark:text-white md:text-3xl">
        {label}
      </h2>
      <p className="text-sm text-gray-500">{secondLabel}</p>
    </div>
  );
}

export default Header;
