import { baseApi } from "../../../api/baseApi";

export const academicSemesterApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllAcademicSemester: builder.query({
         query:()=>({
             url:"/academic-semesters",
             method:"GET"
         })
        }),

        addAcademicSemester: builder.mutation({
            query: (data) => ({
              url: '/academic-semesters/create-academic-semester',
              method: 'POST',
              body: data,
            }),
          }),
        }),
     })

export const {useGetAllAcademicSemesterQuery  , useAddAcademicSemesterMutation}=academicSemesterApi
