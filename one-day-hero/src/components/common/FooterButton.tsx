import { PropsWithChildren } from "react";

import Button from "./Button";
import LinkButton from "./LinkButton";

type FooterButtonProps = {
  formId?: string;
  href?: string;
  theme?: "primary" | "active" | "cancel" | "inactive";
  disabled?: boolean;
};

const FooterButton = ({
  formId,
  href,
  theme,
  disabled,
  children
}: PropsWithChildren<FooterButtonProps>) => {
  const defaultStyle =
    "bg-background shadow-upper flex h-14 max-w-screen-sm w-full items-center justify-center fixed bottom-0 left-0";

  return (
    <div className={`${defaultStyle}`}>
      {href === undefined ? (
        <Button
          className="cs:h-11"
          type="submit"
          form={formId}
          theme={theme}
          disabled={disabled}>
          {children}
        </Button>
      ) : (
        <LinkButton className="cs:h-11" href={href} theme={theme}>
          {children}
        </LinkButton>
      )}
    </div>
  );
};

export default FooterButton;
