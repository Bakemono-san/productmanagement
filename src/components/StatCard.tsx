import { ArrowDownRight, ArrowUpRight, LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

const StatCard = ({
    title,
    value,
    change,
    icon: Icon,
    trend,
    bg,
    color,
    iconBg
  }: {
    title: string;
    value: string;
    change?: number;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
    trend?: string;
    bg?: string;
    color?: string;
    iconBg?: string;
  }) => (
    <div className={`${bg ?"bg-"+bg : "bg-white"}  ${color? "text-"+color: "text-gray-800"} rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 cursor-pointer`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          {change && (
            <div className="flex items-center mt-2">
              {trend === "up" ? (
                <ArrowUpRight className="w-4 h-4 text-green-500" />
              ) : (
                <ArrowDownRight className="w-4 h-4 text-red-500" />
              )}
              <span
                className={`text-sm font-medium ml-1 ${
                  trend === "up" ? "text-green-600" : "text-red-600"
                }`}
              >
                {change}%
              </span>
            </div>
          )}
        </div>
        <div className={`w-12 h-12 bg-gradient-to-br from-${iconBg ?? "blue"}-500 to-${iconBg ?? "purple"}-600 rounded-lg flex items-center justify-center`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  export default StatCard;