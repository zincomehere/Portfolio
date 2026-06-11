import React, { useState } from 'react';
import { Send, Mail, MessageSquare, CheckCircle, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Facebook = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Affiliate Video Production',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const accessKey = personalInfo.web3FormsKey || "";

    // If key is empty or has placeholder, simulate submission for immediate dev preview
    if (!accessKey || accessKey.includes("YOUR_WEB3FORMS")) {
      console.warn("Web3Forms access key is not configured. Simulating submission success.");
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Affiliate Video Production',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }, 1200);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.name} - ${formData.projectType}`,
          message: formData.message,
          from_name: "Lê Phong Vinh Portfolio",
          replyto: formData.email
        })
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          projectType: 'Affiliate Video Production',
          message: ''
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Có lỗi xảy ra khi gửi tin nhắn: " + (result.message || "Vui lòng thử lại sau."));
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting contact form to Web3Forms:", error);
      alert("Lỗi kết nối. Không thể gửi tin nhắn ngay bây giờ.");
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-neutral-950 overflow-hidden">
      {/* Decorative background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-900/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="font-mono text-xs uppercase tracking-widest text-purple-400 mb-3 block">
            Hợp tác & Liên hệ
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Khởi Động Dự Án Của Bạn
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
          <p className="text-neutral-400 max-w-xl mx-auto text-sm sm:text-base mt-4 font-light">
            Sẵn sàng nâng tầm doanh thu sản phẩm với các chiến dịch video ngắn tự động tối ưu hóa từ AI?
          </p>
        </div>

        {/* Layout: Info Grid + Form Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Info Details (Left Column: 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white tracking-wide">Thông tin liên lạc trực tiếp</h3>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Tôi luôn sẵn lòng trao đổi về các ý tưởng kịch bản AI, quy trình sản xuất video tự động hàng loạt, hoặc tối ưu hóa CTR chuyển đổi cho các chiến dịch Affiliate Performance.
              </p>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-4">
              
              {/* Email */}
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase">Gửi Email</span>
                  <span className="text-sm text-neutral-300 group-hover:text-white font-medium transition-colors">{personalInfo.email}</span>
                </div>
              </a>

              {/* Facebook Profile */}
              <a 
                href={personalInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Facebook size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase">Facebook Profile</span>
                  <span className="text-sm text-neutral-300 group-hover:text-white font-medium transition-colors">fb.me/zinle.2901</span>
                </div>
              </a>

              {/* Zalo Direct */}
              <a 
                href={personalInfo.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 hover:border-pink-500/30 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                  <MessageCircle size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-neutral-500 block uppercase">Zalo Direct</span>
                  <span className="text-sm text-neutral-300 group-hover:text-white font-medium transition-colors">Chat qua Zalo</span>
                </div>
              </a>

            </div>

            <div className="p-4 rounded-xl bg-neutral-900/20 border border-white/5 text-[11px] text-neutral-500 font-mono">
              ⚡ Status: Active in {personalInfo.location}. Responses within 12 hours.
            </div>
          </div>

          {/* Form Card (Right Column: 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 shadow-2xl relative">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <CheckCircle size={56} className="text-emerald-400 mb-4 animate-bounce" />
                    <h4 className="text-2xl font-bold text-white mb-2">Gửi tin nhắn thành công!</h4>
                    <p className="text-sm text-neutral-400 max-w-sm mb-6 font-light">
                      Cảm ơn bạn đã liên hệ. Tôi sẽ phản hồi lại ngay qua email của bạn trong thời gian sớm nhất.
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-neutral-800 hover:border-neutral-700 bg-neutral-900 text-neutral-300 text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      Gửi tin nhắn mới
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label htmlFor="name" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Họ và tên</label>
                        <input 
                          type="text" 
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Nguyễn Văn A"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1.5">
                        <label htmlFor="email" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Địa chỉ Email</label>
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="name@company.com"
                          className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label htmlFor="projectType" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Hình thức hợp tác</label>
                      <select 
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 transition-colors"
                      >
                        <option value="Affiliate Video Production">Affiliate Video Production (Sản xuất hàng loạt)</option>
                        <option value="AI Workflow Consulting">Tư vấn Quy trình AI (Workflow Consulting)</option>
                        <option value="Visual Art & Techwear branding">Visual Art & AI Branding</option>
                        <option value="Full-time / Long-term Hire">Hợp tác dài hạn / Toàn thời gian</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label htmlFor="message" className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Chi tiết yêu cầu</label>
                      <textarea 
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        placeholder="Hãy mô tả ngắn gọn về sản phẩm và mục tiêu CTR bạn mong muốn..."
                        className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(168,85,247,0.4)] disabled:opacity-50 disabled:cursor-not-allowed group"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Đang gửi thông tin...</span>
                        </>
                      ) : (
                        <>
                          <Send size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                          <span>Gửi yêu cầu liên hệ</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
