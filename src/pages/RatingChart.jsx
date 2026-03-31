import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const RatingsChart = ({ ratings }) => {
  const reversedRatings = [...ratings].reverse();

  const barColors = ["#F97316", "#FB923C", "#FDBA74", "#FDE68A", "#34D399"];

  return (
    <div className=" w-full mt-3 md:mt-6 w-11/12 mx-auto">
      <h3 className="font-bold text-xl mb-6 text-gray-800">Ratings Overview</h3>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart
          data={reversedRatings}
          layout="vertical"
          margin={{ top: 10, right: 20, left: 20, bottom: 10 }}
        >
          <CartesianGrid
            vertical={false}
            stroke="#f0f0f0"
            strokeDasharray="3 3"
          />

          <XAxis
            type="number"
            tick={{ fontSize: 12, fill: "#666" }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(value) =>
              value >= 1000 ? `${value / 1000}k` : value
            }
          />

          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 14, fill: "#333", fontWeight: 500 }}
            axisLine={false}
            tickLine={false}
            width={60}
          />

          <Tooltip
            formatter={(value) => [
              value >= 1000 ? `${(value / 1000).toFixed(1)}k` : value,
              "Count",
            ]}
            cursor={{ fill: "#f5f5f5" }}
            contentStyle={{
              borderRadius: "12px",
              border: "none",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "10px 16px",
            }}
            labelStyle={{ fontWeight: "bold", color: "#555" }}
          />

          <Bar
            dataKey="count"
            barSize={32}
            radius={[8, 8, 8, 8]}
            isAnimationActive={true}
          >
            {reversedRatings.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={barColors[index % barColors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingsChart;
