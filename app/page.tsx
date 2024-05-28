
'use client'

import Image from "next/image";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import GetData from "./GetData";
const queryClient = new QueryClient()

export default function Home() {

  return (
    <QueryClientProvider client={queryClient} >
      <GetData />
    </QueryClientProvider>
  );
}
