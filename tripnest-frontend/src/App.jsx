import { ConfigProvider, App as AntdApp } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import AttractionsPage from "./pages/AttractionsPage";
import ChatBotWidget from "./components/ChatBot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
          borderRadius: 6,
        },
      }}
    >
      <AntdApp>
        <BrowserRouter>
          <Layout> {/* ✅ Layout is now inside BrowserRouter */}
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/attractions" element={<AttractionsPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatBotWidget />
          </Layout>
        </BrowserRouter>
      </AntdApp>
    </ConfigProvider>
  </QueryClientProvider>
);

export default App;
