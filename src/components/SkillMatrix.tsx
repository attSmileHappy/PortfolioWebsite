import React, { useState } from 'react';
import { Code2, Cpu, Database, Terminal, Wrench, Search } from 'lucide-react';

interface SkillMatrixProps {
  isDark: boolean;
}

export const SkillMatrix: React.FC<SkillMatrixProps> = ({ isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const skillGroups = [
    {
      title: 'Languages',
      icon: <Code2 className="w-4 h-4 text-[#0c4da2]" />,
      items: ['C#', 'Python', 'SQL', 'R', 'JAVA', 'JavaScript', 'HTML5', 'Bash', 'Swift', 'Objective-C']
    },
    {
      title: 'Framework & Libraries',
      icon: <Cpu className="w-4 h-4 text-[#0c4da2]" />,
      items: [
        '.NET Core', '.NET Framework', 'WPF', 'WinForms', 'Telerik UI', 
        'DevExpress', 'EF Core', 'OpenCV', 'PyTorch', 'TensorFlow', 
        'Flask', 'Django', 'Pandas', 'Numpy', 'Scikit-learn', 'SwiftUI', 'UIKit'
      ]
    },
    {
      title: 'AI Models & Architectures',
      icon: <Terminal className="w-4 h-4 text-[#0c4da2]" />,
      items: ['YOLOv5', 'YOLOv3', 'KorBERT', 'DETR', 'SSD', 'CNN', 'RNN', 'ANN / DNN', 'KoNLPy']
    },
    {
      title: 'Database & OS',
      icon: <Database className="w-4 h-4 text-[#0c4da2]" />,
      items: ['MSSQL', 'Oracle DBMS', 'MySQL', 'SQLite', 'Firebase', 'Windows', 'Mac', 'Linux']
    },
    {
      title: 'Dev Tools & Collaboration',
      icon: <Wrench className="w-4 h-4 text-[#0c4da2]" />,
      items: [
        'Visual Studio', 'VS Code', 'Git / GitLab', 'Azure DevOps', 
        'Google Colab', 'Jupyter Notebook', 'R Studio', 'SQL Developer', 'Xcode'
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 border-t transition-colors duration-200 border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Search Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-widest text-[#3b82f6] dark:text-[#60a5fa] uppercase mb-2">
              TECHNICAL EXPERTISE
            </div>
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}>
              다양한 환경을 다루는 풀스택 기술 보유 현황
            </h2>
            <p className={`mt-2 text-sm sm:text-base ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              C#과 .NET 데스크톱 프레임워크부터 딥러닝 AI 프레임워크까지 목적에 부합하는 최적의 도구를 선택합니다.
            </p>
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-72">
            <Search className={`w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="스택 검색 (예: C#, WPF, YOLO)..."
              className={`w-full pl-10 pr-4 py-2.5 text-xs rounded-xl border transition-colors outline-none focus:border-[#3b82f6] font-medium ${
                isDark 
                  ? 'bg-[#0c101c] border-[#222f4c] text-white placeholder-slate-400' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, gIdx) => {
            const filteredItems = searchQuery.trim()
              ? group.items.filter(item => item.toLowerCase().includes(searchQuery.toLowerCase()))
              : group.items;

            return (
              <div
                key={gIdx}
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  isDark
                    ? 'bg-[#0f1422] border-[#222f4c] hover:border-[#3b82f6]/60'
                    : 'bg-white border-slate-200 hover:border-[#0c4da2]/40 shadow-sm'
                } ${filteredItems.length === 0 && searchQuery ? 'opacity-30' : 'opacity-100'}`}
              >
                {/* Title */}
                <div className={`flex items-center gap-2 mb-4 pb-3 border-b ${
                  isDark ? 'border-[#1e273d]' : 'border-slate-100'
                }`}>
                  <div className={`p-1.5 rounded-lg ${
                    isDark ? 'bg-[#0c4da2]/30 text-blue-400' : 'bg-blue-50 text-[#0c4da2]'
                  }`}>
                    {group.icon}
                  </div>
                  <h3 className={`text-sm font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {group.title}
                  </h3>
                  <span className={`ml-auto font-mono text-[11px] font-semibold ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}>
                    {filteredItems.length}
                  </span>
                </div>

                {/* Items in unboxed style */}
                <div className="flex flex-wrap gap-2">
                  {filteredItems.map((item, itemIdx) => {
                    const isMatched = searchQuery && item.toLowerCase().includes(searchQuery.toLowerCase());
                    return (
                      <span
                        key={itemIdx}
                        className={`text-xs px-2.5 py-1 rounded-md transition-colors font-medium ${
                          isMatched
                            ? 'bg-[#0c4da2] text-white font-bold shadow-sm'
                            : isDark
                              ? 'bg-slate-800 text-slate-200 hover:text-white hover:bg-slate-700'
                              : 'bg-slate-100 text-slate-800 hover:text-slate-950 hover:bg-slate-200'
                        }`}
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
