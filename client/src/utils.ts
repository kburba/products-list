type FormatterProps = {
  locale: string;
  style: Intl.NumberFormatOptions['style'];
  currency: Intl.NumberFormatOptions['currency'];
};
export const formatter = ({ locale, style, currency }: FormatterProps) =>
  new Intl.NumberFormat(locale, {
    style,
    currency,
  });
