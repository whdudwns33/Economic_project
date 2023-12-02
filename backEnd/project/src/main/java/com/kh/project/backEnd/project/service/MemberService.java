package com.kh.project.backEnd.project.service;

import com.kh.project.backEnd.project.dto.MemberReqDto;
import com.kh.project.backEnd.project.entity.Member;
import com.kh.project.backEnd.project.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;


    // 회원 가입 여부 확인
    public boolean isMember(String email) {
        return memberRepository.existsByEmail(email);
    }

    public boolean saveAmountService(MemberReqDto memberReqDto) {
        String email = memberReqDto.getEmail();
        int amount = memberReqDto.getAmount();
        try {
            if (email != null && isMember(email)) {
                Member member = memberRepository.findByEmail(email).orElseThrow(
                        () -> new RuntimeException("해당 회원이 존재하지 않습니다.")
                );
                member.setAmount(amount);
                memberRepository.save(member);
            }
            return true;
        } catch (Exception e) {
            // 실제 발생하는 예외에 따라 처리
            e.printStackTrace();  // 로깅은 좀 더 나은 방법으로 변경 가능
            return false;
        }
    }
}
