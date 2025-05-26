import { Button } from "@/components/ui/button";

const ButtonsPage = () => {
  return (
    <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
      <Button variant="default">Default</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="link">link</Button>
    </div>
  );
};

export default ButtonsPage;
