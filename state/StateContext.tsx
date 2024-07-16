import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from "react";

interface UserStateProviderProps extends PropsWithChildren {}

export function UserStateProvider({ children }: UserStateProviderProps) {
  const [userState, dispatch] = useReducer(userStateReducer, initialUserState);

  return (
    <UserContext.Provider value={userState}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}

export function useUserState() {
  return useContext(UserContext);
}

export function useUserStateDispatch() {
  return useContext(UserDispatchContext);
}

function userStateReducer(userState: UserStateProps, action) {
  switch (action.type) {
    case "step": {
      return {
        ...userState,
        step: action.step,
      };
    }
    case "goal": {
      return {
        ...userState,
        goal: action.goal,
      };
    }
    case "gender": {
      return {
        ...userState,
        gender: action.gender,
      };
    }
    case "age": {
      return {
        ...userState,
        age: action.age,
      };
    }
    case "weight": {
      return {
        ...userState,
        weight: action.weight,
      };
    }
    case "activityLevel": {
      return {
        ...userState,
        goalWeight: action.activityLevel,
      };
    }
    case "moreInfo": {
      return {
        ...userState,
        moreInfo: action.moreInfo,
      };
    }
    case "setMacros": {
      return {
        ...userState,
        calories: action.calories,
        fat: action.fat,
        carbs: action.carbs,
        protein: action.protein,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

type UserStateProps = {
  step: number;
  goal?: "WEIGHT_LOSS" | "MUSCLE_GAIN" | "BOTH";
  gender?: "MALE" | "FEMALE" | "OTHER";
  age?: number;
  weight?: number;
  moreInfo?: string;
  calories?: number;
  fat?: number;
  carbs?: number;
  protien?: number;
  activityLevel?: number;
};
const initialUserState: UserStateProps = { step: 0 };

export const UserContext = createContext<UserStateProps>(initialUserState);

export const UserDispatchContext = createContext((value?: any) => {});
