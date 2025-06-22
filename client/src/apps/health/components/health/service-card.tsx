import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  action: string;
  onClick: () => void;
  iconBgColor?: string;
  iconColor?: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  onClick,
  iconBgColor = "bg-china-blue/10",
  iconColor = "text-china-blue"
}: ServiceCardProps) {
  return (
    <div 
      className="bg-white/80 backdrop-blur-sm border border-blue-100 rounded-3xl p-8 hover:shadow-2xl hover:bg-white/90 transition-all duration-300 cursor-pointer group transform hover:scale-[1.02]"
      onClick={onClick}
    >
      <div className="text-center">
        <div className={`w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <Icon className="text-white" size={36} />
        </div>
        <h3 className="text-2xl font-bold text-slate-800 mb-3 font-main">{title}</h3>
        <p className="text-slate-600 mb-6 leading-relaxed font-main">{description}</p>
        <span 
          onClick={onClick}
          className="inline-flex items-center text-blue-700 font-semibold group-hover:text-blue-800 transition-colors duration-200 font-small rounded-full bg-blue-100 px-4 py-2 hover:bg-blue-200 cursor-pointer"
        >
          {action} 
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
        </span>
      </div>
    </div>
  );
}