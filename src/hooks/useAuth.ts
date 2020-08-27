import React, { useState,useEffect } from 'react';
import services from '@/services'
export default async function useAuth () {
    const {status} = await services.checkToken()
    if (status == 1){
        return true
    } else {
        return false 
    }
}