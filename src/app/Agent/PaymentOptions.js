export default function PaymentOptions() {
  return (
    <div className="h-full border-blue-500 rounded-lg border-2 pt-4 shadow-sm w-full mt-2">
      <div className="max-w-lg mx-auto p-4">
        {/* Accepted Credit Cards */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Accepted Credit Cards</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="visa" className="form-checkbox" />
              <label htmlFor="visa">
                <img src="/images/visa.png" alt="Visa" className="h-8" />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="mastercard"
                className="form-checkbox"
              />
              <label htmlFor="mastercard">
                <img
                  src="/images/mastercard.png"
                  alt="Mastercard"
                  className="h-8"
                />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="amex" className="form-checkbox" />
              <label htmlFor="amex">
                <img
                  src="/images/amex.png"
                  alt="American Express"
                  className="h-8"
                />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="discover" className="form-checkbox" />
              <label htmlFor="discover">
                <img
                  src="/images/discover.png"
                  alt="Discover"
                  className="h-8"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Online Payment Options */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Online Payment Options</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="paypal" className="form-checkbox" />
              <label htmlFor="paypal">
                <img src="/images/paypal.png" alt="PayPal" className="h-8" />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="applepay" className="form-checkbox" />
              <label htmlFor="applepay">
                <img
                  src="/images/applepay.png"
                  alt="Apple Pay"
                  className="h-8"
                />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="skrill" className="form-checkbox" />
              <label htmlFor="skrill">
                <img src="/images/skrill.png" alt="Skrill" className="h-8" />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="venmo" className="form-checkbox" />
              <label htmlFor="venmo">
                <img src="/images/venmo.png" alt="Venmo" className="h-8" />
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="googlepay" className="form-checkbox" />
              <label htmlFor="googlepay">
                <img
                  src="/images/googlepay.png"
                  alt="Google Pay"
                  className="h-8"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Other Payment Types */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Other Payment Types</h3>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="cash" className="form-checkbox" />
              <label htmlFor="cash" className="text-sm">
                Cash
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id="checks" className="form-checkbox" />
              <label htmlFor="checks" className="text-sm">
                Checks
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="moneyorder"
                className="form-checkbox"
              />
              <label htmlFor="moneyorder" className="text-sm">
                Money Order
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
