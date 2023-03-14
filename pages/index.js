import Head from "next/head";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import TopCards from "../components/TopCards";
import BarCharts from "../components/BarCharts";
import RecentOrders from "../components/RecentOrders";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta
          name="description"
          content="Digi store dashboard. Here we calculate profit and losses"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 w-full min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-2 gap-4">
          <BarCharts />
          <RecentOrders />
        </div>
      </main>
    </>
  );
}
