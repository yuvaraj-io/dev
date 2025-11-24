import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const blogsApi = createApi({
    reducerPath: 'blogs',
    baseQuery: fetchBaseQuery({
      baseUrl: window.location.href.includes('localhost') ? 'http://localhost:1000' : 'https://dev-backend-69kv.onrender.com',
    //   fetchFn: async (...args)=>{
    //     await pause(1000);
    //     return fetch(...args);
    //   }
    }),
    endpoints(builder){
        return {
          // invalidatesTags: (result, error, data)=>{
          //   console.log(result, error, data);
          //   // return [{type: 'Album', id: data.id}];
          // },

          fetchBlog: builder.query({
            
            query: (data) => {
              if (!data) {
                throw new Error("Invalid request: Data is required"); // Throws error
              }
              return {
                url: '/blogs/' + atob(data),
                method: 'GET',
              }
            }
          }),

          postBlog: builder.mutation({
              query: (data) => {
                return {
                  url: '/blogs',
                  // params: { userId: user.name },
                  method: 'POST',
                  body: {
                    content: data.blogContent,
                    collections_id: data.collectionId,
                    heading:data.blogTitle
                    // title: faker.commerce.productName(),
                    // userId: user.id,
                  },
                }
              }

          }),

          putBlog: builder.mutation({
              query: (data) => {
                return {
                  url: '/blogs',
                  // params: { userId: user.name },
                  method: 'PUT',
                  body: {
                    content: data.blogContent,
                    collections_id: data.collections_id,
                    heading:data.blogTitle
                    // title: faker.commerce.productName(),
                    // userId: user.id,
                  },
                }
              }

          }),

          fetchAllCollections: builder.query({

            query: (data) => {
              
              return {
                url: '/collections',
                // params: { userId: user.name },
                method: 'GET',
                // body: {
                //   title: data.title,

                //   // title: faker.commerce.productName(),
                //   // userId: user.id,
                // },
              }
            }

        }), 

          postCollection: builder.mutation({
              query: (data) => {
                return {
                  url: '/collections',
                  // params: { userId: user.name },
                  method: 'POST',
                  body: {
                    title: data.collectionTitle,
                    topics_id: data.topicId
                  },
                }
              }
          }),

            fetchCollections: builder.query({
              query: (data) =>{
                if (!data) {
                  throw new Error("Invalid request: Data is required"); // Throws error
                }
                return {
                  url: '/collectionsById/'+ atob(data),
                  method: 'GET',
                }
              },
            }),
            fetchTopics: builder.query({
                // providesTags: (result, error, data) => {
                //   console.log(result, error, data);
                //   // return [result, error, data];
                // },
                query: (data) =>{
                  return {
                    url: '/topics',
                    // params: { userId: user.id },
                    method: 'GET',
                  }
                },
            }),
            fetchSections: builder.query({
                // providesTags: (result, error, data) => {
                //   console.log(result, error, data);
                //   // return [result, error, data];
                // },
                query: (id) =>{
                  return {
                    url: '/sections/' + atob(id),
                    // params: { userId: user.id },
                    method: 'GET',
                  }
                },
            }),
            fetchSectionCollections: builder.query({
                // providesTags: (result, error, data) => {
                //   console.log(result, error, data);
                //   // return [result, error, data];
                // },
                query: (id) =>{
                  return {
                    url: '/section/collections/' + atob(id),
                    // params: { userId: user.id },
                    method: 'GET',
                  }
                },
            }),
          postSectionCollections: builder.mutation({
                // providesTags: (result, error, data) => {
                //   console.log(result, error, data);
                //   // return [result, error, data];
                // },
                query: (payload) =>{
                  console.log(payload)
                  return {
                    url: '/section/collections?' + +new Date(),
                    // params: { userId: user.id },
                    method: 'POST',
                    body:payload
                  }
                },
          }),
          postSection: builder.mutation({
                // providesTags: (result, error, data) => {
                //   console.log(result, error, data);
                //   // return [result, error, data];
                // },
                query: (payload) =>{
                  console.log(payload)
                  return {
                    url: '/sections?' + +new Date(),
                    // params: { userId: user.id },
                    method: 'POST',
                    body:payload
                  }
                },
          }),
        }
    }
});

export const { useFetchTopicsQuery, usePutBlogMutation, usePostSectionMutation, usePostSectionCollectionsMutation, useFetchSectionCollectionsQuery, useFetchSectionsQuery, useFetchCollectionsQuery, usePostCollectionMutation, usePostBlogMutation, useFetchAllCollectionsQuery, useFetchBlogQuery  } = blogsApi;
export { blogsApi}