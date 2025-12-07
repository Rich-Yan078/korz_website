import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={onClose}></div>

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-[#e1ccae]/20">
          <div className="flex items-center gap-3">
            <ShoppingBag className="text-[#e1ccae]" size={24} />
            <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="text-gray-400" size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="text-gray-600 mb-4" size={64} />
              <p className="text-gray-400 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white/5 border border-[#e1ccae]/20 rounded-lg p-4"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold mb-1 line-clamp-1">
                        {item.product.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">{item.product.series} Series</p>
                      <div className="text-[#e1ccae] font-bold">
                        ₽{(item.product.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3 bg-white/10 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Minus className="text-gray-300" size={16} />
                      </button>
                      <span className="text-white font-semibold w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:bg-white/10 rounded transition-colors"
                      >
                        <Plus className="text-gray-300" size={16} />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemove(item.product.id)}
                      className="text-red-400 hover:text-red-300 transition-colors text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[#e1ccae]/20 p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-white">Total:</span>
              <span className="text-[#e1ccae]">₽{total.toLocaleString()}</span>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-[#e1ccae] to-[#c4a876] text-black font-bold rounded-lg hover:shadow-2xl hover:shadow-[#e1ccae]/30 transition-all duration-300">
              Proceed to Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 border-2 border-[#e1ccae]/30 text-gray-300 font-semibold rounded-lg hover:bg-white/5 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
