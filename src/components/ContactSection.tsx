import React, { useState } from 'react';
import { Mail, Phone, Github, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import { DEVELOPER_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [senderName, setSenderName] = useState('');
  const [senderContact, setSenderContact] = useState('');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Create mailto link with prefilled subject & body
    const subject = encodeURIComponent(`[포트폴리오 문의] ${senderName || '채용 담당자'}님의 메시지`);
    const body = encodeURIComponent(`보낸 분: ${senderName} (${senderContact})\n\n내용:\n${message}`);
    window.location.href = `mailto:${DEVELOPER_INFO.email}?subject=${subject}&body=${body}`;
    
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      setMessage('');
      setSenderName('');
      setSenderContact('');
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 border-t transition-colors duration-200 border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-bold tracking-widest text-[#3b82f6] dark:text-[#60a5fa] uppercase mb-2">
                GET IN TOUCH
              </div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                새로운 기회와 협업을 기다립니다
              </h2>
              <p className={`mt-3 text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                C# .NET WPF 엔터프라이즈 솔루션 개발, 업무 자동화(RPA) 도입, 혹은 새로운 도전을 함께할 팀을 찾고 계시다면 언제든 편하게 연락해 주세요.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              
              {/* Email Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                isDark ? 'bg-[#0f1422] border-[#222f4c]' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${isDark ? 'bg-[#0c4da2]/30 text-blue-400' : 'bg-blue-50 text-[#0c4da2]'}`}>
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>이메일 문의</div>
                    <a 
                      href={`mailto:${DEVELOPER_INFO.email}`} 
                      className={`text-xs sm:text-sm font-semibold transition-colors ${
                        isDark ? 'text-white hover:text-blue-300' : 'text-slate-900 hover:text-[#0c4da2]'
                      }`}
                    >
                      {DEVELOPER_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(DEVELOPER_INFO.email, 'email')}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#0c4da2]'
                  }`}
                  title="이메일 주소 복사"
                >
                  {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                isDark ? 'bg-[#0f1422] border-[#222f4c]' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${isDark ? 'bg-[#0c4da2]/30 text-blue-400' : 'bg-blue-50 text-[#0c4da2]'}`}>
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>연락처 전화번호</div>
                    <a 
                      href={`tel:${DEVELOPER_INFO.phone}`} 
                      className={`text-xs sm:text-sm font-mono font-semibold transition-colors ${
                        isDark ? 'text-white hover:text-blue-300' : 'text-slate-900 hover:text-[#0c4da2]'
                      }`}
                    >
                      {DEVELOPER_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(DEVELOPER_INFO.phone, 'phone')}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-[#0c4da2]'
                  }`}
                  title="전화번호 복사"
                >
                  {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* GitHub Card */}
              <div className={`p-4 rounded-xl border flex items-center justify-between transition-colors ${
                isDark ? 'bg-[#0f1422] border-[#222f4c]' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-lg ${isDark ? 'bg-[#0c4da2]/30 text-blue-400' : 'bg-blue-50 text-[#0c4da2]'}`}>
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>GitHub 저장소</div>
                    <a
                      href={DEVELOPER_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs sm:text-sm font-mono font-semibold transition-colors ${
                        isDark ? 'text-white hover:text-blue-300' : 'text-slate-900 hover:text-[#0c4da2]'
                      }`}
                    >
                      github.com/attSmileHappy
                    </a>
                  </div>
                </div>

                <a
                  href={DEVELOPER_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-3 py-1 text-xs font-semibold ${
                    isDark ? 'text-blue-400 hover:text-blue-300' : 'text-[#0c4da2] hover:underline'
                  }`}
                >
                  방문하기
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Quick Contact Note Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDark 
                ? 'bg-[#0f1422] border-[#222f4c]' 
                : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center gap-2 mb-4">
                <MessageSquare className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-[#0c4da2]'}`} />
                <h3 className={`text-base font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  간편 문의 및 제안 남기기
                </h3>
              </div>
              <p className={`text-xs mb-6 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                메시지를 작성하시면 바로 기본 메일 클라이언트로 연결되어 김예지 개발자에게 안전하게 전송됩니다.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      성함 / 회사명
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="홍길동 (예: 테크기업 채용팀)"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border outline-none transition-colors focus:border-[#3b82f6] font-medium ${
                        isDark ? 'bg-[#0c101c] border-[#222f4c] text-white placeholder-slate-400' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${
                      isDark ? 'text-slate-200' : 'text-slate-700'
                    }`}>
                      회신 연락처 / 이메일
                    </label>
                    <input
                      type="text"
                      required
                      value={senderContact}
                      onChange={(e) => setSenderContact(e.target.value)}
                      placeholder="hr@example.com 또는 010-xxxx-xxxx"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-lg border outline-none transition-colors focus:border-[#3b82f6] font-medium ${
                        isDark ? 'bg-[#0c101c] border-[#222f4c] text-white placeholder-slate-400' : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}>
                    문의 내용 / 제안 메시지
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="프로젝트 의뢰, 포지션 제안, 커피챗 등 자유롭게 작성해주세요."
                    className={`w-full px-3.5 py-2.5 text-xs rounded-lg border outline-none transition-colors focus:border-[#3b82f6] resize-none font-medium ${
                      isDark ? 'bg-[#0c101c] border-[#222f4c] text-white placeholder-slate-400' : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className={`text-[11px] ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                    전송 시 공식 이메일 ({DEVELOPER_INFO.email})로 즉시 전달됩니다.
                  </span>

                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#0c4da2] hover:bg-[#1260c8] rounded-lg shadow-sm transition-all active:scale-95"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>메시지 전송</span>
                  </button>
                </div>

                {sentSuccess && (
                  <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs text-center font-semibold">
                    메일 클라이언트를 통한 전송 준비가 완료되었습니다! 빠른 시일 내에 회신드리겠습니다.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
