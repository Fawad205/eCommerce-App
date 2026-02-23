import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { Xmls } from '../../../assets/icons/Xmls';
import SvgIcon from '../../../assets/svgs/SvgIcon';
import { SafeAreaView } from 'react-native-safe-area-context';
import { theme } from '../../../components/theme';
import InputFileds from '../../../components/commons/InputComp';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../../../components/commons/Button';
import DropDown from '../../../components/DropDown';

export default function ProfileScreen({ navigation }: any) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error, setError] = useState<string | undefined>(undefined);

  return (
    <SafeAreaView>
        <ScrollView>
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 0, padding: 8 }}
          >
            <SvgIcon xml={Xmls.backArrow} width={18} height={18} />
          </TouchableOpacity>

          <Text style={{ fontFamily: theme.fonts.semiBold, fontSize: 20 }}>
            Checkout
          </Text>
        </View>
        {/* Profile image section */}
        <View style={{justifyContent:'center',alignItems:'center',marginTop:20}}>
        <Image source={require('../../../assets/images/Profile/Profile.png')} />
      </View>

      {/* EmailAnd Passwords */}
        <View >
            <Text style={{fontFamily:theme.fonts.bold,fontSize:20,marginBottom:10,marginTop:20}}>Personal Details</Text>
            
            <Text style={{fontFamily:theme.fonts.regular,fontSize:16}}>Email Address</Text>

            <InputFileds placeholder="Enter Email Address" 
            
            containerStyle={{width: 'auto'}}/>

            <Text style={{fontFamily:theme.fonts.regular,fontSize:16,marginTop:20}}>Password</Text>

            <InputFileds placeholder="Enter Password" containerStyle={{width: 'auto'}} />

            <Text style={styles.changePasswordText}>Change Password</Text>

        </View>

        <View style={styles.divider} />

        {/* Bussniess Address Detais */}
        <View >
            <Text style={{fontFamily:theme.fonts.bold,fontSize:18,marginBottom:10,marginTop:20}}>Business Address Details</Text>

            <Text style={{fontFamily:theme.fonts.regular}}>Pincode</Text>
            <InputFileds 
            placeholder='Pincode'
            containerStyle={{width: 'auto'}} />

            <Text style={{fontFamily:theme.fonts.regular,marginTop:20}}>Address</Text>
            <InputFileds placeholder="Enter Address" 
            containerStyle={{width: 'auto'}}/>

            <Text style={{fontFamily:theme.fonts.regular,marginTop:20}}>City</Text>
            <InputFileds placeholder="Enter City" 
            containerStyle={{width: 'auto'}}/>

            <Text style={{fontFamily:theme.fonts.regular,marginTop:20}}>State</Text>
            
            <DropDown 
            placeholder="Select State"
  items={[
    { label: 'Punjab', value: 1 },
    { label: 'Sindh', value: 2 },
    { label: 'Balochistan', value: 3 },
  ]}
  selectedValue={selectedCategory}
  onValueChange={(value) => setSelectedCategory(value)}
  containerStyle={{ width: 370 }}
  error={error}
            
            />

            <Text style={{fontFamily:theme.fonts.regular,marginTop:20}}>Country</Text>
            <InputFileds placeholder="Enter Country" 
            containerStyle={{width: 'auto'}}/>
        </View>

        <View style={styles.divider} />

        {/* Bank Account Details */}

        <View>
            <Text style={{fontFamily:theme.fonts.bold,fontSize:18,marginBottom:10,marginTop:20}}>Bank Account Details</Text>

            <Text style={{fontFamily:theme.fonts.regular}}>Account Holder Number</Text>
            <InputFileds placeholder="Enter Account Holder Number" containerStyle={{width: 'auto'}}/> 

            <Text style={{fontFamily:theme.fonts.regular,marginTop:20}}>Account Holder's Name</Text>
            <InputFileds placeholder="Enter Account Holder's Name"containerStyle={{width: 'auto'}} />

            <Text style={{fontFamily:theme.fonts.regular,marginTop:20}}>IFSC Code</Text>
            <InputFileds placeholder="Enter IFSC Code" containerStyle={{width: 'auto'}} />

        </View>

        <View>
            <Button
            text='Save'
            />
        </View>
      


      </View>
      </ScrollView>
    </SafeAreaView>
  );
}
