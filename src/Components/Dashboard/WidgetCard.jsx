import PortfolioPieChart from "./PortfolioPieChart";


export default function WidgetCard() {
  return (
    <div style={{"background-color": "#f9fafb"}}  className="flex-1 rounded-lg p-4 overflow-visible ">
     
        <PortfolioPieChart />
     
    </div>
  );
}
