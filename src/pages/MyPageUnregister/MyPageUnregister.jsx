import React, { useState } from 'react';
import * as S from './MyPageUnregister.styles';

const MyPageUnregister = () => {
    return (
        <S.Style>
            <S.Unregister>
                탈퇴하면 앞으로 이 계정에서 로그인할 수 없고 이 계정을 다시 복구할 수 없습니다.
            </S.Unregister>
        </S.Style>

    );

};

export default MyPageUnregister;