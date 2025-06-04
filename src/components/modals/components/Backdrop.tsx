interface ModalBackdropProps {
  onClick: () => void;
}

export function ModalBackdrop({ onClick }: ModalBackdropProps) {
  return (
    <div
      className="relative inset-0 bg-black/50 backdrop-blur-sm transition-opacity z-10"
      onClick={onClick}
    />
  );
}
