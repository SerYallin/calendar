import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

import { Home } from '@pages/home';
import { Modal } from '@widgets/modal';
import { Contact } from '@pages/contact';
import { Success } from '@pages/success';
import { TModalType } from '@widgets/modal/types';

export const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();
  const onCLose = () => {
    navigate(-1);
  };

  return (
    <div className="app" data-cy="app">
      <Routes location={background || location}>
        <Route path="/calendar/" element={<Home />} />
        <Route path="/calendar/contact" element={<Contact />} />
        <Route path="/calendar/success" element={<Success />} />
      </Routes>
      {background && (
        <Routes>
          <Route
            path="/calendar/contact"
            element={
              <Modal onClose={onCLose}>
                <Contact />
              </Modal>
            }
          />
          <Route
            path="/calendar/success"
            element={
              <Modal type={TModalType.SUCCESS} onClose={onCLose}>
                <Success />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};
