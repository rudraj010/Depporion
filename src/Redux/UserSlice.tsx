import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from './Store';

interface User {
  name: string;
  EmployeeId: string;
  PhoneNumber: string;
  Email: string;
  Address: string;
  DeviceName: string;
  DeviceMemory: string;
  DeviceProcessor: string;
  DiskCapacity: string;
}

export const AddUser = createAsyncThunk('user/adduser', async (user: User) => {
  try {
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const result = await response.json();
      console.log(result, 'result');
      console.log(user, 'user');
      return result;
    } else {
      throw new Error('Error occurred while adding user');
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
});

// export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users', {
//       method: 'GET',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//     });

//     const result = await response.json();
//     console.log(result, 'redux');
//     return result;
//   } catch (error) {
//     console.log(error, 'error');
//     throw error;
//   }
// });

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();
    console.log(result, 'redux');
    return result;
  } catch (error) {
    console.log(error, 'error');
    throw error;
  }
});







interface UserState {
  loading: boolean;
  user: User[];
  error: string;
  issuccess: boolean;
}

const initialState: UserState = {         
  loading: false,
  user: [],
  error: '',
  issuccess: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(AddUser.pending, (state) => {
        state.loading = true;
        state.error = '';
        state.issuccess = false;
      })
      .addCase(AddUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.issuccess = true;
      })
      .addCase(AddUser.rejected, (state, action) => {
        state.loading = false;
        state.user = [];
        state.error = action.error.message ?? 'Error occurred while adding user';
      })

      // fetch user


      .addCase(fetchUser.pending, (state) => {
        console.log(state,'mmmmmm')

        state.loading = true;
        state.error = '';
        state.issuccess = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log(state,'full')

        state.loading = false;
        state.user = action.payload;
        state.issuccess = true;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        console.log(state,'reject')

        state.loading = false;
        state.user = [];
        state.error = action.error.message ?? 'Error occurred while fetching users';
      });
  },
});

export default userSlice.reducer;
