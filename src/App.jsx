import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Menu, Payout, ManageQuizzes, ManageVideos, ProgramActivities,
          ProgramBenefits, PayoutDetails} from './Pages';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/admin" element={<Menu />} />
          <Route path="/payouts" element={<Payout />} />
          <Route path="/payout-details" element={<PayoutDetails />} />
          <Route path="/manage-quizzes" element={<ManageQuizzes />} />
          <Route path="/manage-videos" element={<ManageVideos />} />
          <Route path="/program-activities" element={<ProgramActivities />} />
          <Route path="/program-benefits" element={<ProgramBenefits />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App