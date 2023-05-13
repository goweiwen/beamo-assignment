import { useState } from "react";

function Toast(message: string) {
  const [isVisible, setVisible] = useState(false);

  return {
    toast: isVisible && (
      <div className="fixed inset-x-0 bottom-0 mb-4 flex items-center justify-center">
        <div className="rounded-full bg-gray-200 px-3 py-2">{message}</div>
      </div>
    ),
    setVisible,
  };
}

export default Toast;
