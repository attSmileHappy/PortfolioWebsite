import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Mail, Phone, Github, Send, Copy, Check } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#FAF8F5] rounded-2xl border border-[#E8E4DC] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E4DC] bg-white">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFE600]" />
            <h3 className="font-bold text-base text-[#141413]">Contact & Direct Connect</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-[#FAF8F5] text-[#141413] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quick Copy Buttons */}
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E8E4DC]">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#141413]" />
                <div>
                  <div className="text-[11px] font-mono text-[#7A776F]">Email Address</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#141413]">{PERSONAL_INFO.email}</div>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EFECE6] text-xs font-semibold text-[#141413] border border-[#E8E4DC] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-[#E8E4DC]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#141413]" />
                <div>
                  <div className="text-[11px] font-mono text-[#7A776F]">Phone Number</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#141413]">{PERSONAL_INFO.phone}</div>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#EFECE6] text-xs font-semibold text-[#141413] border border-[#E8E4DC] transition-colors cursor-pointer flex items-center gap-1.5"
              >
                {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
          </div>

          {/* Quick Send Message Form */}
          {submitted ? (
            <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-600 mx-auto" />
              <div className="font-bold text-sm text-emerald-900">메시지가 준비되었습니다!</div>
              <p className="text-xs text-emerald-700">
                작성하신 내용으로 이메일 클라이언트가 열립니다.
              </p>
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Portfolio Inquiry from ${formData.name}&body=${encodeURIComponent(formData.message)}`}
                className="inline-block mt-2 px-4 py-2 rounded-full bg-emerald-800 text-white text-xs font-semibold hover:bg-emerald-900"
              >
                이메일 전송하기
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#7A776F]">
                Send Direct Message
              </div>
              <div>
                <label className="block text-xs font-medium text-[#141413] mb-1">성함 / 기관명</label>
                <input
                  type="text"
                  required
                  placeholder="예: 홍길동 (담당자)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E4DC] text-xs sm:text-sm focus:outline-none focus:border-[#141413]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#141413] mb-1">회신 이메일</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E4DC] text-xs sm:text-sm focus:outline-none focus:border-[#141413]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#141413] mb-1">문의 내용</label>
                <textarea
                  required
                  rows={3}
                  placeholder="프로젝트 제안, 채용 관련 문의 등 메시지를 입력해주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-[#E8E4DC] text-xs sm:text-sm focus:outline-none focus:border-[#141413]"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-[#141413] text-white hover:bg-[#2A2926] font-semibold text-xs tracking-wide uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>메시지 작성 완료 및 전송</span>
              </button>
            </form>
          )}

        </div>
      </div>
    </div>
  );
};
