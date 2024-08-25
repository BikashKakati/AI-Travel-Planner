import { ButtonProps, Text, TouchableOpacity } from "react-native";

export const CustomButton = ({
  className,
  title,
  onPress,
  ...props
}: {
  props?: ButtonProps,
  className?: String,
  title:String,
  onPress:()=>void
}) => {
  return (
    <TouchableOpacity
      className={`py-5 bg-red-500  w-11/12 rounded-full flex items-center mt-6`}
      onPress={onPress}
      {...props}
    >
      <Text className="text-white text-base font-semibold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};
