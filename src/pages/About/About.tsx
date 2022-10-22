import MainLayout from "@/layouts/Main/Main";
import { PropsWithChildren } from "react";
import cn from "classnames";

interface IAboutPageProps { }

const isActive = true;

const AboutPage: React.FC<IAboutPageProps> = props => {
  return (
    <div className="w-screen h-screen space-x-6 center-children">
      <div
        className={cn(
          "text-gray-900",
          isActive && "bg-red-300",
          !isActive && "bg-gray-700",
        )}
      >
        Abc
      </div>

      <Card title="Title is here">
        Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.” Sarah Dayan Staff Engineer, Algolia
      </Card>

      <Card title="Title is here 2">
        <div>
          <img />
        </div>
      </Card>

      <Card title="Title is here 3">
        Tailwind CSS is the only framework that I've seen scale on large teams.
        It’s easy to customize, adapts to any design, and the build size is
        tiny.” Sarah Dayan Staff Engineer, Algolia
      </Card>
    </div>
  );
};

export default AboutPage;

const Card: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({ title, children }) => {
  return (
    <div className="w-56 p-6 rounded-lg shadow-md">
      <h2 className="mb-2 text-2xl font-semibold">{title}</h2>
      <div className="">{children}</div>
    </div>
  );
};
