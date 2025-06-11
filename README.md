# OptionsOracle
Uses AI-Model to select best evaluated option's contracts.

OptionsOracle/
├── client/                    # React Native + TypeScript (Expo)
│   ├── assets/
│   ├── components/            # UI components
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── OptionResultScreen.tsx
│   │   └── MarketDashboard.tsx
│   ├── utils/
│   ├── services/              # API calls to backend
│   ├── App.tsx
│   └── app.json
│
├── server/                    # Backend (Node.js or Python Flask/FastAPI)
│   ├── data/
│   ├── logic/
│   │   └── optionPicker.ts    # or option_picker.py
│   ├── routes/
│   │   └── options.ts         # /getOption endpoint
│   ├── index.ts               # Express server
│   └── package.json
│
└── README.md
