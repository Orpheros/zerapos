// import { Minus, Pencil, Plus, X } from "lucide-react";
import { Minus, Pencil, Plus, X } from "lucide-react";
import type { SelectedItemProps } from "./card.interface";
import { useState } from "react";

export function SelectedCard({
  id,
  name,
  photo,
  price,
  quantity,
  onUpdateQuantity,
  onRemove,
  note,
  onUpdateNote,
  isExpanded = false,
  onToggleExpanded,
}: SelectedItemProps) {
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [tempNote, setTempNote] = useState(note || "");

  const handleSaveNote = () => {
    if (onUpdateNote) {
      onUpdateNote(id, tempNote);
    }
    setIsEditingNote(false);
  };

  const handleCancelNote = () => {
    setTempNote(note || "");
    setIsEditingNote(false);
  };

  const handleCardClick = (e: React.MouseEvent) => {
    if (
      e.target === e.currentTarget ||
      (e.target as HTMLElement).closest(".card-content")
    ) {
      if (onToggleExpanded) {
        onToggleExpanded(id);
      }
    }
  };

  return (
    <div
      className={`rounded-lg bg-white border border-gray-100 hover:border-orange-200 transition-all duration-200 group cursor-pointer ${
        isExpanded ? "border-orange-200" : ""
      }`}
      onClick={handleCardClick}
    >
      <div className="flex items-center p-3">
        {/* Product Image */}
        <div className="w-11 h-11 flex-shrink-0 rounded-md overflow-hidden card-content">
          <img className="w-full h-full object-cover" src={photo} alt={name} />
        </div>

        {/* Product Info */}
        <div className="flex-1 ml-3 min-w-0 card-content">
          <h4 className="text-sm font-medium text-gray-800 line-clamp-1 mb-0.5">
            {name}
          </h4>
          <div className="flex items-center justify-between">
            <p className="text-orange-600 font-semibold text-sm">
              Rp {(price * quantity).toLocaleString("id-ID")}
            </p>

            {/* Controls */}
            <div className="flex items-center gap-0.5">
              {/* Quantity Controls */}
              <div className="flex items-center bg-gray-50 rounded-md">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateQuantity(id, quantity - 1);
                  }}
                  className="p-1 hover:bg-gray-100 rounded-l-md transition-colors disabled:opacity-40"
                >
                  <Minus className="w-3 h-3 text-gray-600" />
                </button>
                <span className="text-xs font-semibold text-gray-800 px-2 py-1">
                  {quantity}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onUpdateQuantity(id, quantity + 1);
                  }}
                  className="p-1 hover:bg-gray-100 rounded-r-md transition-colors"
                >
                  <Plus className="w-3 h-3 text-gray-600" />
                </button>
              </div>

              {/* Note Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditingNote(true);
                }}
                className={`p-1 rounded-md transition-colors ml-1 ${
                  note
                    ? "bg-orange-50 text-orange-600 hover:bg-orange-100"
                    : "hover:bg-gray-50 text-gray-500 opacity-0 group-hover:opacity-100"
                } ${isExpanded ? "!opacity-100" : ""}`}
                title={note ? "Edit note" : "Add note"}
              >
                <Pencil className="w-3 h-3" />
              </button>

              {/* Remove Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(id);
                }}
                className={`p-1 rounded-md hover:bg-red-50 transition-colors opacity-0 group-hover:opacity-100 ml-1 ${
                  isExpanded ? "!opacity-100" : ""
                }`}
              >
                <X className="w-3 h-3 text-red-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Note Display */}
      {note && !isEditingNote && (
        <div className="px-3 pb-3">
          <div className="bg-orange-50 rounded-md p-2 border-l-2 border-orange-200">
            <p className="text-xs text-orange-800">{note}</p>
          </div>
        </div>
      )}

      {/* Note Editor */}
      {isEditingNote && (
        <div className="px-3 pb-3">
          <div className="bg-gray-50 rounded-md p-2">
            <textarea
              value={tempNote}
              onChange={(e) => setTempNote(e.target.value)}
              placeholder="Add a note for this item..."
              className="w-full text-xs bg-transparent border-none outline-none resize-none"
              rows={2}
              autoFocus
            />
            <div className="flex justify-end gap-1 mt-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCancelNote();
                }}
                className="px-2 py-1 text-xs text-gray-600 hover:bg-gray-100 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleSaveNote();
                }}
                className="px-2 py-1 text-xs bg-orange-500 text-white hover:bg-orange-600 rounded transition-colors"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
