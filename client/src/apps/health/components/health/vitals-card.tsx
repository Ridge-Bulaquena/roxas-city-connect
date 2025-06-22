import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface VitalsCardProps {
  title: string;
  subtitle: string;
  value: string | number;
  unit: string;
  status: string;
  timestamp: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  statusType: 'success' | 'warning' | 'info';
  progress?: number;
  hasAnimation?: boolean;
}

export function VitalsCard({
  title,
  subtitle,
  value,
  unit,
  status,
  timestamp,
  icon: Icon,
  iconBgColor,
  iconColor,
  statusType,
  progress,
  hasAnimation = false
}: VitalsCardProps) {
  const statusColors = {
    success: "bg-green-50 text-green-600",
    warning: "bg-yellow-50 text-yellow-600",
    info: "bg-blue-50 text-blue-600"
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-12 h-12 ${iconBgColor} rounded-full flex items-center justify-center`}>
              <Icon className={`${iconColor} text-xl`} size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{subtitle}</p>
            </div>
          </div>
          {hasAnimation && (
            <div className="relative">
              <div className="w-3 h-3 bg-red-500 rounded-full pulse-ring"></div>
            </div>
          )}
        </div>

        <div className="mb-4">
          <div className="text-3xl font-bold text-gray-900">{value}</div>
          <div className="text-sm text-gray-600">{unit}</div>
        </div>

        {progress !== undefined && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-1000 ease-out" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <Badge className={statusColors[statusType]}>
            {status}
          </Badge>
          <span className="text-xs text-gray-500">{timestamp}</span>
        </div>
      </CardContent>
    </Card>
  );
}
