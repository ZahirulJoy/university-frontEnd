import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemesterQuery } from "../../../redux/features/admin/academicSemester/academicSemesterApi";
import { useState } from "react";
import { TQueryParam } from "../../../types/global";

interface DataType {
  key: React.Key;
  year: number;
  startMonth: string;
  endMonth: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    filters: [
      {
        text: "Autumn",
        value: "Autumn",
      },
      {
        text: "Summer",
        value: "Summer",
      },
      {
        text: "Fall",
        value: "Fall",
      },
    ],
  },
  {
    title: "Year",
    dataIndex: "year",
    key: "year",
    defaultSortOrder: "descend",
    filters: [
        {
          text: "2024",
          value: "2024",
        },
        {
          text: "2025",
          value: "2025",
        },
      ],
  },
  {
    title: "Start Month",
    dataIndex: "startMonth",
    key: "startMonth",
   
  },
  {
    title: "End Month",
    dataIndex: "endMonth",
    key: "endMonth",
  },
];

const AcademicSemester = () => {
  const [params, setParams] = useState<TQueryParam[] | undefined>(undefined);
  const { data: academicSemesterData  , isFetching} = useGetAllAcademicSemesterQuery(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data = academicSemesterData?.data?.map((item:any, index: number) => ({
    key: item.id || index,
    ...item,
  }));

  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log({ extra, filters });
    if (extra.action === "filter") {
      const queryParams: TQueryParam[] = [];
      filters?.name?.forEach((item) =>
        queryParams.push({ name: "name", value: item })
      );

      filters?.year?.forEach((item) =>
        queryParams.push({ name: "year", value: item })
      );

      setParams(queryParams);
    }
  };

  return (
    <div>
      <Table<DataType>
        loading={isFetching}
        columns={columns}
        dataSource={data}
        onChange={onChange}
      />
    </div>
  );
};

export default AcademicSemester;
