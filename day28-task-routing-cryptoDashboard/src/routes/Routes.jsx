
import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router';

import Analytics from '../screens/Analytics';
import Crypto from '../screens/Crypto';
import Ecommerece from '../screens/Ecommerece';

// 👇 NEW IMPORTS
import PagesProfile from '../screens/PagesProfile';
import PagesInvoice from '../screens/PagesInvoice';
import PagesTasks from '../screens/PagesTasks';
import PagesCalendar from '../screens/PagesCalendar';

import AuthSignIn from '../screens/AuthSignIn';
import AuthSignUp from '../screens/AuthSignUp';
import AuthResetPassword from '../screens/AuthResetPassword';

import UiAlerts from '../screens/UiAlerts';
import UiButtons from '../screens/UiButtons';
import UiCards from '../screens/UiCards';
import UiGeneral from '../screens/UiGeneral';
import UiGrid from '../screens/UiGrid';
import UiModals from '../screens/UiModals';
import UiOffcanvas from '../screens/UiOffcanvas';
import UiPlaceholders from '../screens/UiPlaceholders';
import UiTabs from '../screens/UiTabs';
import UiTypography from '../screens/UiTypography';

import IconsFeather from '../screens/IconsFeather';
import IconsFontAwesome from '../screens/IconsFontAwesome';

import FormsBasicInputs from '../screens/FormsBasicInputs';
import FormsLayouts from '../screens/FormsLayouts';
import FormsInputGroups from '../screens/FormsInputGroups';
import FormsAdvancedInputs from '../screens/FormsAdvancedInputs';
import FormsEditors from '../screens/FormsEditors';
import FormsValidation from '../screens/FormsValidation';

import TablesBootstrap from '../screens/TablesBootstrap';
import TablesResponsive from '../screens/TablesResponsive';
import TablesButtons from '../screens/TablesButtons';
import TablesColumnSearch from '../screens/TablesColumnSearch';
import TablesFixedHeader from '../screens/TablesFixedHeader';
import TablesMulti from '../screens/TablesMulti';
import TablesAjax from '../screens/TablesAjax';

import FormPlugins from '../screens/FormPlugins';
import Datatables from '../screens/Datatables';

import ChartsChartjs from '../screens/ChartsChartjs';
import ChartsApexcharts from '../screens/ChartsApexcharts';

import Notifications from '../screens/Notifications';

import MapsGoogle from '../screens/MapsGoogle';
import MapsVector from '../screens/MapsVector';

import MultiLevel1 from '../screens/MultiLevel1';
import MultiLevel2 from '../screens/MultiLevel2';

const AppRoutes = () => {
  return (
    <RouterRoutes>

      {/* EXISTING (DO NOT TOUCH) */}
      <Route path="/" element={<Analytics />} />
      <Route path="/dashboard-crypto" element={<Crypto />} />
      <Route path="/dashboard-ecommerce" element={<Ecommerece />} />

      {/* PAGES */}
      <Route path="/pages-profile" element={<PagesProfile />} />
      <Route path="/pages-invoice" element={<PagesInvoice />} />
      <Route path="/pages-tasks" element={<PagesTasks />} />
      <Route path="/pages-calendar" element={<PagesCalendar />} />

      {/* AUTH */}
      <Route path="/auth/sign-in" element={<AuthSignIn />} />
      <Route path="/auth/sign-up" element={<AuthSignUp />} />
      <Route path="/auth/reset-password" element={<AuthResetPassword />} />

      {/* UI */}
      <Route path="/ui-alerts" element={<UiAlerts />} />
      <Route path="/ui-buttons" element={<UiButtons />} />
      <Route path="/ui-cards" element={<UiCards />} />
      <Route path="/ui-general" element={<UiGeneral />} />
      <Route path="/ui-grid" element={<UiGrid />} />
      <Route path="/ui-modals" element={<UiModals />} />
      <Route path="/ui-offcanvas" element={<UiOffcanvas />} />
      <Route path="/ui-placeholders" element={<UiPlaceholders />} />
      <Route path="/ui-tabs" element={<UiTabs />} />
      <Route path="/ui-typography" element={<UiTypography />} />

      {/* ICONS */}
      <Route path="/icons-feather" element={<IconsFeather />} />
      <Route path="/icons-font-awesome" element={<IconsFontAwesome />} />

      {/* FORMS */}
      <Route path="/forms-basic-inputs" element={<FormsBasicInputs />} />
      <Route path="/forms-layouts" element={<FormsLayouts />} />
      <Route path="/forms-input-groups" element={<FormsInputGroups />} />
      <Route path="/forms-advanced-inputs" element={<FormsAdvancedInputs />} />
      <Route path="/forms-editors" element={<FormsEditors />} />
      <Route path="/forms-validation" element={<FormsValidation />} />

      {/* TABLES */}
      <Route path="/tables-bootstrap" element={<TablesBootstrap />} />
      <Route path="/tables-datatables-responsive" element={<TablesResponsive />} />
      <Route path="/tables-datatables-buttons" element={<TablesButtons />} />
      <Route path="/tables-datatables-column-search" element={<TablesColumnSearch />} />
      <Route path="/tables-datatables-fixed-header" element={<TablesFixedHeader />} />
      <Route path="/tables-datatables-multi" element={<TablesMulti />} />
      <Route path="/tables-datatables-ajax" element={<TablesAjax />} />

      {/* PLUGINS */}
      <Route path="/form-plugins" element={<FormPlugins />} />
      <Route path="/datatables" element={<Datatables />} />

      {/* CHARTS */}
      <Route path="/charts-chartjs" element={<ChartsChartjs />} />
      <Route path="/charts-apexcharts" element={<ChartsApexcharts />} />

      {/* OTHERS */}
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/maps-google" element={<MapsGoogle />} />
      <Route path="/maps-vector" element={<MapsVector />} />

      {/* MULTI LEVEL */}
      <Route path="/multi-level-1" element={<MultiLevel1 />} />
      <Route path="/multi-level-2" element={<MultiLevel2 />} />

    </RouterRoutes>
  );
};

export default AppRoutes;
