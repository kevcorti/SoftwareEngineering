import { useState } from "react";


export default function FormNavBar(props) {

    const { step } = useState(props.step);
    const setStep = (n) => {
        props.setStep(n);
    }

    return(
        <nav className="nav-steps">
        <button
          className={`nav-button ${step === 2 ? 'active' : ''}`}
          onClick={() => setStep(2)}
        >
          1
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 3 ? 'active' : ''}`}
          onClick={() => setStep(3)}
        >
          2
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 4 ? 'active' : ''}`}
          onClick={() => setStep(4)}
        >
          3
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 5 ? 'active' : ''}`}
          onClick={() => setStep(5)}
        >
          4
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 6 ? 'active' : ''}`}
          onClick={() => setStep(6)}
        >
          5
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 7 ? 'active' : ''}`}
          onClick={() => setStep(7)}
        >
          6
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 8 ? 'active' : ''}`}
          onClick={() => setStep(8)}
        >
          7
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 9 ? 'active' : ''}`}
          onClick={() => setStep(9)}
        >
          8
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 10 ? 'active' : ''}`}
          onClick={() => setStep(10)}
        >
          9
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 11 ? 'active' : ''}`}
          onClick={() => setStep(11)}
        >
          10
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 12 ? 'active' : ''}`}
          onClick={() => setStep(12)}
        >
          11
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 13 ? 'active' : ''}`}
          onClick={() => setStep(13)}
        >
          12
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 14 ? 'active' : ''}`}
          onClick={() => setStep(14)}
        >
          13
        </button>
        <span className="nav-space"></span>
        <button
          className={`nav-button ${step === 15 ? 'active' : ''}`}
          onClick={() => setStep(15)}
        >
          14
        </button>
      </nav>
    );
}