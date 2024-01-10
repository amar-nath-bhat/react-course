import "./stats.css";
import StatsCard from "./StatsCard";
function Stats() {
  const items = [
    {
      stat: "25+",
      description: "Active Students",
    },
    {
      stat: "200+",
      description: "Professional Courses",
    },
    {
      stat: "120+",
      description: "Skilled Instructors",
    },
    {
      stat: "100%",
      description: "Satisfaction Rate",
    },
  ];
  return (
    <div className="row statsrow justify-content-md-between justify-content-center gap-5 mt-5">
      {items.map((item) => (
        <StatsCard
          // key={index}
          stat={item.stat}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Stats;
