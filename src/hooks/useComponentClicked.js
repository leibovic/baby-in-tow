import { useCallback, useEffect } from "react";

function useComponentClicked(
  componentRef,
  onComponentClicked,
  onDocumentClicked
) {
  const onDocumentClick = useCallback(
    event => {
      if (!componentRef.current) {
        return;
      }

      if (componentRef.current.contains(event.target)) {
        if (onComponentClicked) {
          onComponentClicked(event);
        }
      } else if (onDocumentClicked) {
        onDocumentClicked(event);
      }
    },
    [componentRef, onComponentClicked, onDocumentClicked]
  );

  useEffect(() => {
    document.addEventListener("mousedown", onDocumentClick);

    return function cleanup() {
      document.removeEventListener("mousedown", onDocumentClick);
    };
  }, [onDocumentClick]);
}

export default useComponentClicked;
