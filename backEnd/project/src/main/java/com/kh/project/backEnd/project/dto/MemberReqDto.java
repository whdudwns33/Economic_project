package com.kh.project.backEnd.project.dto;

import com.kh.project.backEnd.project.constant.Authority;
import com.kh.project.backEnd.project.entity.Member;
import lombok.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;

@Slf4j
@Getter
@Setter
@AllArgsConstructor // 모든 필드를 파라미터로 받는 생성자
@NoArgsConstructor // 기본 생성자
@Builder // 빌더 패턴
public class MemberReqDto {
    private String email;
    private String password;
    private String name;
    private String gender;
    private String image;
    private int amount;

    PasswordEncoder passwordEncoder;
    // MemberReqDto -> Member
    public Member toEntity(PasswordEncoder passwordEncoder) {
        return Member.builder()
                .email(email)
                .password(passwordEncoder.encode(password))
                .name(name)
                .gender(gender)
                .amount(amount)
                .authority(Authority.ROLE_USER)
                .build();
    }
    public UsernamePasswordAuthenticationToken toAuthentication() {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,  password);
        System.out.println("승인 이메일 :" + email);
        System.out.println("승인 비밀번호 :" + password);
        System.out.println("승인 토큰 :" + authenticationToken.isAuthenticated());
        System.out.println("승인 토큰 :" + authenticationToken);
        log.warn("Authentication Token Created: {}", authenticationToken);
        return authenticationToken;    }
}
