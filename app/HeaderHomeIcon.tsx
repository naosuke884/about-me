import { Link } from "react-router";

export default function HeaderHomeIcon() {
  return (
    <Link to="/about" className="relative group block">
      {/* 画面上部まで伸びる線 */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 w-1 bg-blue-700 h-screen transition-all duration-300 group-hover:translate-y-2 drop-shadow-sm" />
      <div className="relative transition-all duration-300 group-hover:translate-y-2">
        {/* 円形のアイコン（電球部分） */}
        <div className="block w-9 h-9 bg-blue-500 rounded-full transition-all duration-200 shadow-md group-hover:bg-gradient-to-t group-hover:from-cyan-300 group-hover:via-blue-500 group-hover:to-blue-900 group-hover:shadow-[0_8px_25px_rgba(103,232,249,0.7)] relative z-0" />
        {/* ペンダントライトのカバー（三角形・円錐風） */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[36px] border-r-[36px] border-b-[32px] border-l-transparent border-r-transparent border-b-blue-700 z-10 drop-shadow-md" />
      </div>
    </Link>
  );
}
