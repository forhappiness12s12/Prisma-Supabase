import Image from "next/image";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { createClient } from "@/utils/initPrisma";
const supabase = createClient();

export default function GetData() {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => await supabase.from("Rune").select("*"),
  });
  if (error) {
    console.log(error);
  }
  if (!data) console.log(data);
  return (
    <div>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data?.data ? (
            data?.data?.map((id) => <div>{id.overview}</div>)
          ) : (
            <div>No data</div>
          )}
        </div>
      )}
    </div>
  );
}
