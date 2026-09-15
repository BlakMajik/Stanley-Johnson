import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Mail, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content';

export const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    category: siteContent.inquiryCategories[0].id,
    proposedDate: '',
    formatLocation: '',
    audienceDescription: '',
    budgetRange: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.category) newErrors.category = 'Please select an inquiry category.';
    if (!formData.message.trim()) newErrors.message = 'Please include details about your request.';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch preparation
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionSuccess(true);
    }, 900);
  };

  const getCategoryLabel = (id: string) => {
    const cat = siteContent.inquiryCategories.find((c) => c.id === id);
    return cat ? cat.label : id;
  };

  const handleOpenEmailClient = () => {
    const subject = encodeURIComponent(`[Inquiry: ${getCategoryLabel(formData.category)}] from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Stanley Johnson Team,\n\n` +
      `I would like to submit an inquiry:\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Organization: ${formData.organization || 'N/A'}\n` +
      `Inquiry Category: ${getCategoryLabel(formData.category)}\n` +
      `Proposed Date: ${formData.proposedDate || 'Flexible / TBD'}\n` +
      `Location / Format: ${formData.formatLocation || 'Not specified'}\n` +
      `Audience / Event Description: ${formData.audienceDescription || 'N/A'}\n` +
      `Budget Range: ${formData.budgetRange || 'Open to discussion'}\n\n` +
      `Message / Details:\n${formData.message}\n\n` +
      `Submitted via Stanley Johnson Official Website`
    );

    // Prepare mailto or fallback
    window.location.href = `mailto:inquiry@stanleyjohnsonmusic.com?subject=${subject}&body=${body}`;
  };

  const resetForm = () => {
    setSubmissionSuccess(false);
    setFormData({
      name: '',
      email: '',
      organization: '',
      category: siteContent.inquiryCategories[0].id,
      proposedDate: '',
      formatLocation: '',
      audienceDescription: '',
      budgetRange: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="glass-panel" style={{ padding: 'clamp(1.75rem, 4vw, 3rem)', position: 'relative' }}>
      {submissionSuccess ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: 'rgba(227, 183, 116, 0.15)',
              border: '2px solid var(--color-gold)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem auto',
              color: 'var(--color-gold)',
            }}
          >
            <CheckCircle2 size={36} />
          </div>

          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '0.75rem' }}>
            Inquiry Summary Prepared
          </h3>

          <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto 1.5rem auto', lineHeight: 1.6 }}>
            Thank you, <strong style={{ color: 'var(--color-text-primary)' }}>{formData.name}</strong>. Your inquiry details for <em>{getCategoryLabel(formData.category)}</em> have been generated.
          </p>

          <div
            style={{
              backgroundColor: 'var(--color-bg-deep)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: '1.5rem',
              maxWidth: '560px',
              margin: '0 auto 2rem auto',
              textAlign: 'left',
              fontSize: '0.88rem',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Category:</span>
                <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{getCategoryLabel(formData.category)}</div>
              </div>
              <div>
                <span style={{ color: 'var(--color-text-muted)' }}>Contact Email:</span>
                <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>{formData.email}</div>
              </div>
            </div>
            {formData.organization && (
              <div style={{ marginBottom: '0.75rem' }}>
                <span style={{ color: 'var(--color-text-muted)' }}>Organization:</span>
                <div style={{ color: 'var(--color-text-primary)' }}>{formData.organization}</div>
              </div>
            )}
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '0.75rem', marginTop: '0.75rem' }}>
              <span style={{ color: 'var(--color-text-muted)' }}>Message Summary:</span>
              <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.25rem', whiteSpace: 'pre-wrap' }}>{formData.message}</p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <button onClick={handleOpenEmailClient} className="btn-primary">
              <Mail size={16} />
              Open in Email Client to Send
            </button>
            <a
              href={siteContent.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Direct Message via Facebook
              <ExternalLink size={15} />
            </a>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <button onClick={resetForm} style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', textDecoration: 'underline' }}>
              Submit another inquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div style={{ marginBottom: '2rem' }}>
            <span className="gold-badge" style={{ marginBottom: '0.75rem' }}>
              Start a Conversation
            </span>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.85rem', color: 'var(--color-text-primary)', marginBottom: '0.5rem' }}>
              Event & Collaboration Inquiry
            </h3>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
              Please share your event details or inquiry below. We will review and respond promptly.
            </p>
          </div>

          {/* Inquiry Category Select */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label htmlFor="category" className="form-label">
              Inquiry Category <span style={{ color: 'var(--color-gold)' }}>*</span>
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="form-select"
              aria-required="true"
            >
              {siteContent.inquiryCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.label} &mdash; {cat.description}
                </option>
              ))}
            </select>
          </div>

          {/* Name & Email Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <label htmlFor="name" className="form-label">
                Your Name <span style={{ color: 'var(--color-gold)' }}>*</span>
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Pastor Marcus Vance"
                  className="form-input"
                  style={{ borderColor: errors.name ? '#EF4444' : undefined }}
                  aria-required="true"
                />
              </div>
              {errors.name && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#EF4444', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                  <AlertCircle size={14} />
                  <span>{errors.name}</span>
                </div>
              )}
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email Address <span style={{ color: 'var(--color-gold)' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. contact@churchororganization.org"
                className="form-input"
                style={{ borderColor: errors.email ? '#EF4444' : undefined }}
                aria-required="true"
              />
              {errors.email && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#EF4444', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                  <AlertCircle size={14} />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
          </div>

          {/* Organization & Location/Format Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <label htmlFor="organization" className="form-label">
                Church or Organization <span style={{ color: 'var(--color-text-muted)' }}>(Optional)</span>
              </label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="e.g. Grace Fellowship Church"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="formatLocation" className="form-label">
                Event Location or Virtual Format
              </label>
              <input
                type="text"
                id="formatLocation"
                name="formatLocation"
                value={formData.formatLocation}
                onChange={handleChange}
                placeholder="e.g. Atlanta, GA or Virtual Webinar"
                className="form-input"
              />
            </div>
          </div>

          {/* Proposed Date & Budget Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            <div>
              <label htmlFor="proposedDate" className="form-label">
                Proposed Date or Timeframe <span style={{ color: 'var(--color-text-muted)' }}>(Optional)</span>
              </label>
              <input
                type="text"
                id="proposedDate"
                name="proposedDate"
                value={formData.proposedDate}
                onChange={handleChange}
                placeholder="e.g. November 2026 or Spring 2027"
                className="form-input"
              />
            </div>

            <div>
              <label htmlFor="budgetRange" className="form-label">
                Honorarium / Budget Range <span style={{ color: 'var(--color-text-muted)' }}>(Optional)</span>
              </label>
              <input
                type="text"
                id="budgetRange"
                name="budgetRange"
                value={formData.budgetRange}
                onChange={handleChange}
                placeholder="e.g. Standard ministry honorarium / Open"
                className="form-input"
              />
            </div>
          </div>

          {/* Audience and Event Description */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label htmlFor="audienceDescription" className="form-label">
              Audience & Event Context <span style={{ color: 'var(--color-text-muted)' }}>(Optional)</span>
            </label>
            <input
              type="text"
              id="audienceDescription"
              name="audienceDescription"
              value={formData.audienceDescription}
              onChange={handleChange}
              placeholder="e.g. Annual Men's Conference (approx. 200 attendees) or Sunday Worship Service"
              className="form-input"
            />
          </div>

          {/* Message / Details */}
          <div style={{ marginBottom: '1.75rem' }}>
            <label htmlFor="message" className="form-label">
              Message & Request Details <span style={{ color: 'var(--color-gold)' }}>*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Please provide any additional details regarding your request, vision, or desired discussion points..."
              className="form-textarea"
              style={{ borderColor: errors.message ? '#EF4444' : undefined }}
              aria-required="true"
            />
            {errors.message && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#EF4444', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                <AlertCircle size={14} />
                <span>{errors.message}</span>
              </div>
            )}
          </div>

          {/* Privacy Note */}
          <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.5 }}>
            <em>Notice:</em> Inquiries are handled with confidentiality. Contact details are never sold or automatically enrolled into marketing lists.
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary"
            style={{ width: '100%', padding: '1rem' }}
          >
            {isSubmitting ? (
              <span>Preparing Inquiry...</span>
            ) : (
              <>
                <Send size={18} />
                <span>Submit Inquiry Details</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
