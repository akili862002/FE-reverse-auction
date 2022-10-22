import { PropsWithChildren } from "react";

interface IMainLayoutProps extends PropsWithChildren { }

const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {

  return (
    <>
      <header className="w-full h-20 bg-gray-200"></header>
      <div className="w-full min-h-screen p-6">
        {children}
      </div>
      <footer className="w-full h-10 bg-gray-300"></footer>
    </>
  )
}

export default MainLayout;