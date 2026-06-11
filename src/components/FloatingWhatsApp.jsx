import { useContactData } from "../hooks/useContactData";

export const FloatingWhatsApp = () => {
  const contactData = useContactData();
  const encodedText = encodeURIComponent(contactData.whatsappMessage);
  const whatsappUrl = `https://wa.me/${contactData.whatsappNumber}?text=${encodedText}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip text */}
      <span className="mr-3 scale-0 group-hover:scale-100 origin-right transition-all duration-300 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold py-2 px-3.5 rounded-xl shadow-lg pointer-events-none tracking-wide whitespace-nowrap">
        Talk to an Expert (WhatsApp)
      </span>

      {/* WhatsApp pulse rings */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-xl shadow-emerald-500/20 text-white transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />

        {/* Customized WhatsApp icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current relative z-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.528 2.012 14.077.99 11.52.989 6.082.989 1.66 5.36 1.656 10.79c-.001 1.685.449 3.329 1.302 4.787L1.936 21.05l5.711-1.496zm10.729-7.725c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </a>
    </div>
  );
};
