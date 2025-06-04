import { Save } from "lucide-react";

interface ModalFooterProps {
  onCancel: () => void;
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isLoading: boolean;
  isEditMode: boolean;
}

export const ModalFooter: React.FC<ModalFooterProps> = ({
  onCancel,
  onSave,
  isLoading,
  isEditMode,
}) => {
  return (
    <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
      <div className="flex items-center justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onSave}
          disabled={isLoading}
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          <span>
            {isLoading
              ? "Saving..."
              : isEditMode
              ? "Update Product"
              : "Save Product"}
          </span>
        </button>
      </div>
    </div>
  );
};