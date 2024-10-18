import { Catalog } from "../components";
import { useApp } from "../context";

const Home = () => {
  const {
    data: { sections, media },
  } = useApp();
  return (
    <div className="info">
      {sections.map((section) => (
        <Catalog key={section.id} section={section} media={media} />
      ))}
    </div>
  );
};

export default Home;
