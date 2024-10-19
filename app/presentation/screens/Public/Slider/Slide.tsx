import { SetItem } from '@/presentation/hooks/useStorage';
import { colors } from '@/presentation/theme';
import Boy from '@assets/funcional-menino.png';
import Strength from '@assets/halter-menina.png';
import Training from '@assets/treinadoras.png';
import YogaGirl from '@assets/yoga-menina-negra.png';
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import AppIntroSlider from "react-native-app-intro-slider";
import { ISlideItem } from "./Slide.interface";
import * as S from './Slide.styles';

export const Slider = () => {
  const navigation = useNavigation()
  const slides = [
    {
      id: 1,
      title: "Titulo 1",
      description: "Descricao 1",
      image: Strength,
    },
    {
      id: 2,
      title: "Titulo 2",
      description: "Descricao 2",
      image: YogaGirl,
    },
    {
      id: 3,
      title: "Titulo 3",
      description: "Descricao 3",
      image: Boy,
    },
    {
      id: 4,
      title: "Titulo 4",
      description: "Descricao 4",
      image: Training,
    },
  ];

  const renderItem = ({item}: {item: ISlideItem}) => {
    return (
      <S.Slide>
        <S.Title>{item.title}</S.Title>
        <S.Image source={item.image} resizeMode='contain'/>
        <S.Description>{item.description}</S.Description>
      </S.Slide>       
    );
  }
  const renderButtons = (mode: string) => {
    switch (mode) {
      case "prev":
        return (
          <AntDesign name="leftcircleo" size={24} color={colors.textPrimary} />
        );
      case "next":
        return (
          <AntDesign name="rightcircleo" size={24} color={colors.textPrimary} />
        );
      case "done":
        return (
          <S.DoneButton onPress={() => handleNavigation()}>
            <AntDesign
              name="checkcircleo"
              size={24}
              color={colors.textPrimary}
            />
          </S.DoneButton>
        );
      default:
        return null;
    }
  }


  function handleNavigation() {
    SetItem('@isOnboarded', 'true');
    navigation.navigate('Login')
  }
  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      renderDoneButton={() => renderButtons('done')}
      renderPrevButton={() => renderButtons('prev')}
      renderNextButton={() => renderButtons('next')}
      showPrevButton={true}
    />
  );
}